import {allPostsServices, blogPostServices} from '~/sanity/services';
import {processFillingPostsList} from "./bodyPostsList.services";
import {PaginationConfig} from "~/models";


export const fetch = async (paginationConfig: PaginationConfig) => {
    const allPosts = await allPostsServices.fetch();
    if (allPosts) {
        await processFillingPostsList('All', paginationConfig, [allPosts?.contentBlocks])
        const response = await blogPostServices.fetchListPaginatedByReference({
            skip: paginationConfig.skip,
            limit: paginationConfig.limit,
            includeExcerpts: true
        });
        allPosts.postsLists = response.items;
        paginationConfig = {
            ...paginationConfig,
            total: response.total,
            totalPages: Math.ceil((response.total / paginationConfig.limit))
        }
    }

    return {
        allPosts,
        paginationConfig
    };
}