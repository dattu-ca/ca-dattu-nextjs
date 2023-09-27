import {
    fetchListPaginated,
    fetchListPaginatedByAuthor,
    fetchListPaginatedByCategories,
    fetchListPaginatedBySeries,
    fetchListBySeries,
    fetchListPaginatedByTag,
    fetchBySlug
} from './services';

export const blogPostServices = {
    fetchListPaginated,
    fetchListPaginatedByAuthor,
    fetchListPaginatedByTag,
    fetchListPaginatedByCategories,
    fetchListPaginatedBySeries,
    fetchListBySeries,
    fetchBySlug
};