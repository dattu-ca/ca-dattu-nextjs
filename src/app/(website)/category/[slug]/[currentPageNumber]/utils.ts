import {SERVER_CONFIG} from "~/utils/config.server";
import {metaCategoryServices} from "~/services";
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
        linkFirstPage: `/category/${slug}`,
        linkPrefix: `/category/${slug}/`,
    }
    return await metaCategoryServices.fetchBySlug(slug, {
        includeParent: true,
        includeChildren: true,
        includeContent: true,
        paginationConfig: paginationConfig as PaginationConfig
    });
}