import {BaseModel} from "./types";
import {BlogPost} from "./blogPost";
import {PaginationConfig} from "./paginationConfig";

export interface BodyPostsList extends BaseModel<'BodyPostsList'> {
    name?: string | undefined;
    postsListIdentifier: "All" | "Series" | "Category" | "Tag" | "Author";
    limitPerPage: number;
    isPaginated: boolean;
    posts?: BlogPost[] | undefined;
    paginationData?: PaginationConfig | undefined;
}