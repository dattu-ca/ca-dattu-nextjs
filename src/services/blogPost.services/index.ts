import {
    fetchListPaginated,
    fetchListPaginatedByAuthor,
    fetchListPaginatedByCategories,
    fetchListPaginatedBySeries,
    fetchListPaginatedByTag,
    fetchBySlug
} from './services';

export const blogPostServices = {
    fetchListPaginated,
    fetchListPaginatedByAuthor,
    fetchListPaginatedByTag,
    fetchListPaginatedByCategories,
    fetchListPaginatedBySeries,
    fetchBySlug
};