import {fetchListPaginated, fetchListPaginatedByAuthor, fetchListPaginatedByCategories, fetchListPaginatedByTag, fetchBySlug} from './services';

export const blogPostServices = {
    fetchListPaginated,
    fetchListPaginatedByAuthor,
    fetchListPaginatedByTag,
    fetchListPaginatedByCategories,
    fetchBySlug
};