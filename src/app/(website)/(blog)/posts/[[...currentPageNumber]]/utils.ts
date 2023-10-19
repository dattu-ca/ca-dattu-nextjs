import { SERVER_CONFIG } from "~/utils/config.server";
import { allPostsServices } from "~/services";

interface IProps {
    currentPageNumber?: number | undefined;
}

export const getCurrentPageNumber = (params: IProps) => {
    const { currentPageNumber: paramCurrentPage } = params;
    return paramCurrentPage ? +paramCurrentPage : 1;
}



export const fetchAllPosts = async (currentPage: number) => {
    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (currentPage - 1) * limit;
    const response = await allPostsServices.fetch();


    return response;

}