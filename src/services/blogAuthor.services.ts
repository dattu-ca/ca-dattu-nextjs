'use server';
import {blogAuthorServices, blogPostServices} from "~/sanity/services";
import {PaginationConfig} from "~/models";

export const fetchAllSlugs = () => blogAuthorServices.fetchAllSlugs();
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
        const response = await blogPostServices.fetchListPaginatedByReferences({
            skip: paginationConfig.skip,
            limit: paginationConfig.limit,
            includeExcerpts: true,
            referenceIds: [author.sysId]
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