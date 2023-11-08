export interface PaginationConfig {
    total: number;
    skip: number;
    limit: number;
    current: number;
    totalPages: number;
    linkPrefix: string;
    linkFirstPage: string;
}