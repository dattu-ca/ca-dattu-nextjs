import {SERVER_CONFIG} from "~/utils/config.server";
import {metaTagServices} from "~/services";
import {PaginationConfig} from "~/models";

interface IProps {
    currentPageNumber: string;
}

export const getCurrentPageNumber = (params: IProps) => {
    const {currentPageNumber: paramCurrentPage} = params;
    return paramCurrentPage ? +paramCurrentPage : 1;
}


export const fetchBySlug = async (slug: string, currentPage: number) => {
    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (currentPage - 1) * limit;
    const paginationConfig: Partial<PaginationConfig> = {
        skip,
        limit,
        current: currentPage,
        linkFirstPage: `/tag/${slug}`,
        linkPrefix: `/tag/${slug}/`,
    }
    return await metaTagServices.fetchBySlug(slug, paginationConfig as PaginationConfig);
}