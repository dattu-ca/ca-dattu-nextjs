'use server';
import {blogAuthorServices, blogPostServices} from "~/sanity/services";
import {PaginationConfig} from "~/models";


export const fetchBySlug = async (slug: string) => {
    const author = await blogAuthorServices.fetchBySlug(slug);
    if (author) {
        author.totalPosts = await blogPostServices.fetchTotalByReference(author.sysId);
    }
    return author;
}

export const fetchPostsListBySlug = async (slug: string, paginationConfig: PaginationConfig) => {
    const author = await blogAuthorServices.fetchBySlug(slug);

    if (author) {
        const response = await blogPostServices.fetchListPaginatedByReference({
            skip: paginationConfig.skip,
            limit: paginationConfig.limit,
            includeExcerpts: true,
            referenceId: author.sysId
        })
        return {
            posts: response.items,
            pagination: {
                ...paginationConfig,
                total: response.total,
                totalPages: Math.ceil((response.total / paginationConfig.limit))
            }
        }
    }
}