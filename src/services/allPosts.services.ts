import {allPostsServices, blogPostServices} from '~/sanity/services';
import {PaginationConfig} from "~/models";


export const fetch = async (paginationConfig: PaginationConfig) => {
    const allPosts = await allPostsServices.fetch();
    if (allPosts) {
        const response = await blogPostServices.fetchListPaginatedByReferences({
            skip: paginationConfig.skip,
            limit: paginationConfig.limit,
            includeExcerpts: true
        });
        allPosts.postsListData = {
            sysId: allPosts.sysId,
            cmsSource: allPosts.cmsSource,
            contentType: "BodyPostsList",
            isPaginated: true,
            layout: 'Excerpt',
            limitPerPage: paginationConfig.limit,
            displayName: 'All Posts',
            paginationData: {
                ...paginationConfig,
                total: response.total,
                totalPages: Math.ceil((response.total / paginationConfig.limit)) || 1
            },
            posts: response.items,
            postsListIdentifier: 'All',
        }
    }

    return allPosts;
}