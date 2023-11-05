'use server';
import {blogPostServices, metaTagServices} from "~/sanity/services";
import {PaginationConfig} from "~/models";

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
        if(response.items && Array.isArray(response.items)){
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