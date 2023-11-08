'use server';
import { blogPostServices, metaCategoryServices} from "~/sanity/services";
import {MetaCategory, PaginationConfig} from "~/models";

export const fetchAllSlugs = () => metaCategoryServices.fetchAllSlugs();
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
        category.children = flattenChildren(category);
        const ids = [category.sysId, ...category.children.map(child => child.sysId)];
        if (paginationConfig) {
            const response =
                await blogPostServices.fetchListPaginatedByReferences({
                    skip: paginationConfig.skip,
                    limit: paginationConfig.limit,
                    includeExcerpts: true,
                    referenceIds: ids,
                    includeAuthors: false,
                    sortAscendingPublishDate: false,
                })
            if (response.items && Array.isArray(response.items)) {
                category.postsLists = response.items;
            }
            paginationConfig = {
                ...paginationConfig,
                total: response.total,
                totalPages: Math.ceil((response.total / paginationConfig.limit))
            }
        }
    }

    return {
        category,
        paginationConfig
    };
}
