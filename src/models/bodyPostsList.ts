import {BaseModel} from "./types";
import {BlogPost} from "./blogPost";
import {PaginationConfig} from "./paginationConfig";

export type PostsListIdentifierType = "All" | "Post" | "Series" | "Category" | "Tag" | "Author" | "Custom";
export type PostsListLayoutType = 'Excerpt' | 'Full Post' | 'Heading Only';

export interface BodyPostsList extends BaseModel<'BodyPostsList'> {
    name?: string | undefined;
    showName?: boolean | undefined;
    postsListIdentifier: PostsListIdentifierType;
    limitPerPage: number;
    isPaginated: boolean;
    layout: PostsListLayoutType;

    paginationData?: PaginationConfig | undefined;
    posts?: BlogPost[] | undefined;
}