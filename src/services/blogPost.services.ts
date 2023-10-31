'use server';
import { blogPostServices } from "~/sanity/services";
import {processFillingPostsList} from "~/services/bodyPostsList.services";
import {PaginationConfig} from "~/models";


// export const fetchListPaginatedByAuthor = (authorId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByAuthor(authorId, skip, limit);
// export const fetchListPaginatedByCategories = (categoryIds: string[], skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByCategories(categoryIds, skip, limit);
// export const fetchListPaginatedByTag = (tagId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByTag(tagId, skip, limit);
// export const fetchListPaginatedBySeries = (seriesId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedBySeries(seriesId, skip, limit);
// export const fetchListBySeries = (seriesId: string) => blogPostServices.fetchListBySeries(seriesId);

export const fetchBySlug = async (slug: string) => {
    const post = await blogPostServices.fetchBySlug(slug);
    
    const paginationConfig: Partial<PaginationConfig> ={
        skip: 0,
        limit: 0,
    }
    
    await processFillingPostsList('Post', paginationConfig as PaginationConfig, [post?.contentBlocks])
    if(post && post.series && post.series.sysId){
        const result = await blogPostServices.fetchListPaginatedByReference(0,0, false, post.series.sysId);
        post.seriesPostsList = result.items;
    }
    return post;
}