import {PaginationConfig} from "~/models";
import {blogAuthorServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";

export const fetchAuthorPosts = async (slug: string, currentPage: number) => {
    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (currentPage - 1) * limit;
    const paginationConfig: Partial<PaginationConfig> = {
        skip,
        limit,
        current: currentPage,
        linkFirstPage: `/author/${slug}/posts`,
        linkPrefix: `/author/${slug}/posts`,
    }
    return await blogAuthorServices.fetchPostsListBySlug(slug, paginationConfig as PaginationConfig);
}