'use server';
import { blogPostServices} from "~/contentful/services";


export const fetchListPaginatedByAuthor = (authorId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByAuthor(authorId, skip, limit);
export const fetchListPaginatedByCategories = (categoryIds: string[], skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByCategories(categoryIds, skip, limit);
export const fetchListPaginatedByTag = (tagId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedByTag(tagId, skip, limit);
export const fetchListPaginatedBySeries = (seriesId: string, skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginatedBySeries(seriesId, skip, limit);
export const fetchListPaginated = (skip : number = 0, limit: number = 10) => blogPostServices.fetchListPaginated(skip, limit);
export const fetchBySlug = (slug: string) => blogPostServices.fetchBySlug(slug)
