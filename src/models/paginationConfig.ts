/**
 * The pagination config data.
 */
export interface PaginationConfig {
    /**
     * Total available items in Contentful (or any other data source)
     */
    total: number;
    /**
     * How many have we skipped so far, to find the page number
     */
    skip: number;
    /**
     * How many to show per page, if paginated
     */
    limit: number;
    /**
     * The current page number, if paginated
     */
    current: number;
    /**
     * The total number of available pages, if paginated
     */
    totalPages: number;
    /**
     * Use by the <Link> tag
     */
    linkPrefix?: string | undefined;
    /**
     * Use by the <Link> tag for the first page.
     */
    linkFirstPage?: string | undefined;
}


export interface PaginationParams {
    skip: number;
    limit: number;
}