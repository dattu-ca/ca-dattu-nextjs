'use server';
import {blogPostsListServices} from "~/contentful/services";
import {blogPostServices} from "../blogPost.services";
import {PaginationConfig} from "~/models";


interface IConfig {
    paginationData: PaginationConfig
}

export const fetchBySlug = async (slug: string, config: IConfig) => {
    const blogPostsList = await blogPostsListServices.fetchBySlug(slug);

    for (const item of blogPostsList.postsLists) {
        if (item.postsListIdentifier === 'All') {
            if (item.isPaginated) {
                const limitPerPage = (item.limitPerPage || config.paginationData.limit) as number;
                const result = await blogPostServices.fetchListPaginated(config.paginationData.skip, limitPerPage);
                if (result) {
                    item.posts = result.items;
                    item.paginationData = {
                        skip: config.paginationData.skip as number,
                        limit: limitPerPage as number,
                        current: config.paginationData.current as number,
                        total: result.total as number,
                        totalPages: Math.ceil(result.total / limitPerPage),
                        linkPrefix: config.paginationData.linkPrefix,
                        linkFirstPage: config.paginationData.linkFirstPage,
                    }
                }
            }
        }
    }


    return blogPostsList;


}
