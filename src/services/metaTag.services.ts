'use server';
import {blogPostServices, metaTagServices} from "~/sanity/services";
import {MetaTag, PaginationConfig} from "~/models";

export const fetchAllSlugs = () =>  metaTagServices.fetchAllSlugs();
export const fetchAllActiveTags = async () => {
    const activePosts = await blogPostServices.fetchActivePostsWithReference('Tag')
    const tags: MetaTag[] = [];
    for (const post of activePosts) {
        for(const tag of post.tags){
            const foundTag = tags.find(t => t.sysId === tag.sysId)
            if(foundTag && typeof foundTag.totalPosts !== 'undefined' && !isNaN(foundTag.totalPosts)){
                foundTag.totalPosts = +foundTag.totalPosts + 1;
            }
            else{
                tag.totalPosts = 1;
                tags.push(tag);
            }
        }
    }
    return tags.sort((a,b) => {
        if(a.name.toUpperCase() > b.name.toUpperCase()){
            return 1;
        }
        return -1;
    }).sort((a,b) =>{
        return (b.totalPosts as number) - (a.totalPosts as number);
    });
}
export const fetchBySlug = async (slug: string, paginationConfig?: PaginationConfig) => {
    const tag = await metaTagServices.fetchBySlug(slug);
    if (tag && paginationConfig) {
        const response =
            await blogPostServices.fetchListPaginatedByReferences({
                skip: paginationConfig.skip,
                limit: paginationConfig.limit,
                includeExcerpts: true,
                referenceIds: [tag.sysId],
                includeAuthors: false,
                sortAscendingPublishDate: false,
            })
        tag.postsListData = {
            cmsSource: tag.cmsSource,
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
            postsListIdentifier: 'Tag',
            sysId: tag.sysId
        };
    }
    return tag;
}