export interface PaginationConfig {
    total: number;
    skip: number;
    limit: number;
    current: number;
    linkPrefix: string;
    linkFirstPage: string;
}