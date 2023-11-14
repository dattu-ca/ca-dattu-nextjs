'use server';
import {blogPostServices, metaCategoryServices} from "~/sanity/services";
import {MetaCategory, PaginationConfig} from "~/models";

export const fetchAllSlugs = () => metaCategoryServices.fetchAllSlugs();


const getChildren = (parent: MetaCategory, list: MetaCategory[]) => {
    const children = list.filter(item => item.parent?.sysId === parent.sysId);
    for (const child of children) {
        getChildren(child, list);
        parent.postsListIds = [...(parent.postsListIds || []), ...(child.postsListIds || [])];
    }
    parent.children = children;
    parent.postsListIds = Array.from(new Set(parent.postsListIds))
    parent.totalPosts = parent.postsListIds.length;
}
export const fetchAllCategories = async () => {
    const categories = await metaCategoryServices.fetchAllCategories();
    for (const category of categories) {
        const response = await blogPostServices.fetchListPaginatedByReferences({
            skip: 0,
            referenceIds: [category.sysId],
            limit: 0,
            sortAscendingPublishDate: false,
            includeAuthors: false,
            includeExcerpts: false
        })
        category.postsListIds = response.items.map(item => item.sysId);
        category.totalPosts = response.total;
    }


    const processedCategories = categories.filter(c => !c.parent)
    for (const parent of processedCategories) {
        getChildren(parent, categories);
    }
    return processedCategories;
}

interface IConfig {
    includeContent: boolean;
    includeParent: boolean;
    includeChildren: boolean;
    paginationConfig?: PaginationConfig | undefined;
}

const fetchCategoryAndRelatives = async (slug: string, config: IConfig) => {
    const category = await metaCategoryServices.fetchBySlug(slug, config.includeContent);
    if (category && category.parent && category.parent.slug && config.includeParent) {
        category.parent = await fetchCategoryAndRelatives(category.parent.slug, {
            includeParent: true,
            includeChildren: false,
            includeContent: false
        })
    }
    if (category && category.sysId && config.includeChildren) {
        category.children = [];
        const children = await metaCategoryServices.fetchListByReference(category.sysId);
        if (children && Array.isArray(children) && children.length > 0) {
            for (const child of children) {
                const response = await fetchCategoryAndRelatives(child.slug, {
                    includeParent: false,
                    includeChildren: true,
                    includeContent: false
                });
                if (response) {
                    category.children.push(response);
                }
            }
        }
    }
    return category;
}

const flattenChildren = (category: MetaCategory): MetaCategory[] => {
    if (category && category.children && Array.isArray(category.children) && category.children.length > 0) {
        const response = [];
        for (const child of category.children) {
            response.push(child, ...flattenChildren(child));
        }
        return response;
    }
    return [];
}

export const fetchBySlug = async (slug: string, config: IConfig) => {
    let {paginationConfig} = config;
    const category = await fetchCategoryAndRelatives(slug, config);
    if (category) {
        category.children = flattenChildren(category).sort((a, b) => a.name > b.name ? 1 : -1);
        const ids = [category.sysId, ...(category.children || []).map(child => child.sysId)];
        if (paginationConfig) {
            const response = await blogPostServices.fetchListPaginatedByReferences({
                skip: paginationConfig.skip,
                limit: paginationConfig.limit,
                includeExcerpts: true,
                referenceIds: ids,
                includeAuthors: false,
                sortAscendingPublishDate: false,
            });
            category.postsListData = {
                cmsSource: category.cmsSource,
                contentType: "BodyPostsList",
                isPaginated: true,
                layout: 'Excerpt',
                limitPerPage: paginationConfig.limit,
                name: 'Articles',
                paginationData: {
                    ...paginationConfig,
                    total: response.total,
                    totalPages: Math.ceil((response.total / paginationConfig.limit)) || 1
                },
                posts: response.items,
                postsListIdentifier: 'Category',
                sysId: category.sysId
            }
        }
    }

    return category;
}
