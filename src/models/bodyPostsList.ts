import {BaseModel} from "./types";
import {BlogPost} from "./blogPost";
import {PaginationConfig} from "./paginationConfig";

export type PostsListIdentifierType = "All" | "Series" | "Category" | "Tag" | "Author";
export type PostsListLayoutType = 'Excerpt' | 'Full Post' | 'Heading Only';

export interface BodyPostsList extends BaseModel<'BodyPostsList'> {
    name?: string | undefined;
    postsListIdentifier: PostsListIdentifierType;
    limitPerPage: number;
    isPaginated: boolean;
    layout: PostsListLayoutType;

    paginationData?: PaginationConfig | undefined;
    posts?: BlogPost[] | undefined;
}