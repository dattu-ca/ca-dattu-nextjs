import {SERVER_CONFIG} from "~/utils/config.server";
import {blogPostServices, blogPostsListServices} from "~/services";
import {BlogPost} from "~/models";

interface IProps {
    currentPageNumber?: number | undefined;
}

export const getCurrentPageNumber = (params: IProps) => {
    const {currentPageNumber: paramCurrentPage} = params;
    return paramCurrentPage ? +paramCurrentPage : 1;
}

export const fetchPostsLists = async (currentPage: number) => {
    const blogPostsList = await blogPostsListServices.fetchBySlug('main-posts-list');
    
    
    const limit = 1;//SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (currentPage - 1) * limit;
    const result = await blogPostServices.fetchListPaginated(skip, limit);
    const totalPages = Math.ceil(result.total / limit)
    return {
        blogPostsList: blogPostsList,
        items: result.items as BlogPost[],
        total: result.total,
        totalPages,
        limit,
        skip
    }

}