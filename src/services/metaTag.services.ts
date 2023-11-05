'use server';
import {blogPostServices, metaTagServices} from "~/sanity/services";
import {MetaTag, PaginationConfig} from "~/models";

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
            await blogPostServices.fetchListPaginatedByReference({
                skip: paginationConfig.skip,
                limit: paginationConfig.limit,
                includeExcerpts: true,
                referenceId: tag.sysId,
                includeAuthors: false,
                sortAscendingPublishDate: false,
            })
        if (response.items && Array.isArray(response.items)) {
            tag.postsLists = response.items;
        }
        paginationConfig = {
            ...paginationConfig,
            total: response.total,
            totalPages: Math.ceil((response.total / paginationConfig.limit))
        }

    }
    return {
        tag,
        paginationConfig
    };
}