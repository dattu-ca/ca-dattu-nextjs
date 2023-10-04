import {SERVER_CONFIG} from "~/utils/config.server";
import {blogPostsListServices} from "~/services";
import {PaginationConfig} from "~/models";

interface IProps {
    currentPageNumber?: number | undefined;
}

export const getCurrentPageNumber = (params: IProps) => {
    const {currentPageNumber: paramCurrentPage} = params;
    return paramCurrentPage ? +paramCurrentPage : 1;
}

export const fetchPostsLists = async (currentPage: number, fetchBlogPostsList: boolean) => {
    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (currentPage - 1) * limit;


    const blogPostsList = await blogPostsListServices.fetchBySlug(SERVER_CONFIG.CONTENTFUL_SLUGS.ARTICLES_PAGE, {
        fetchBlogPostsList: fetchBlogPostsList,
        paginationData: {
            skip: skip,
            limit: limit,
            current: currentPage,
            linkPrefix: '/posts/',
            linkFirstPage: '/posts',
        } as PaginationConfig
    });

    return {
        blogPostsList: blogPostsList,
    }

}