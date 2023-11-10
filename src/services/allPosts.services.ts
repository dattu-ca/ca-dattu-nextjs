import {allPostsServices, blogPostServices} from '~/sanity/services';
import {processFillingPostsList} from "./bodyPostsList.services";
import {PaginationConfig} from "~/models";
import {undefined} from "zod";


export const fetch = async (paginationConfig: PaginationConfig) => {
    const allPosts = await allPostsServices.fetch();
    if (allPosts) {
        await processFillingPostsList('All', paginationConfig, [allPosts?.contentBlocks])
        
        const response = await blogPostServices.fetchListPaginatedByReferences({
            skip: paginationConfig.skip,
            limit: paginationConfig.limit,
            includeExcerpts: true
        });
        if(response.total > 0){
            allPosts.postsListData = {
                sysId: allPosts.sysId,
                cmsSource: allPosts.cmsSource,
                contentType: "BodyPostsList",
                isPaginated: false,
                layout: 'Excerpt',
                limitPerPage: paginationConfig.limit,
                name: 'All Posts',
                paginationData: {
                    ...paginationConfig,
                    total: response.total,
                    totalPages: Math.ceil((response.total / paginationConfig.limit))
                },
                posts: response.items,
                postsListIdentifier: 'All',
            }
        }
    }

    return allPosts;
}