'use server';
import { blogPostServices } from "~/sanity/services";


// export const fetchListPaginatedByAuthor = (authorId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByAuthor(authorId, skip, limit);
// export const fetchListPaginatedByCategories = (categoryIds: string[], skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByCategories(categoryIds, skip, limit);
// export const fetchListPaginatedByTag = (tagId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByTag(tagId, skip, limit);
// export const fetchListPaginatedBySeries = (seriesId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedBySeries(seriesId, skip, limit);
// export const fetchListBySeries = (seriesId: string) => blogPostServices.fetchListBySeries(seriesId);

export const fetchBySlug = async (slug: string) => {
    const post = await blogPostServices.fetchBySlug(slug);
    if(post.series.sysId){
        const result = await blogPostServices.fetchListByMetaId(post.series.sysId, false);
        post.seriesPostsLists = result.items;
    }
    return post;
}