import {BaseModel} from "./types";

export interface BodyPostsList extends BaseModel<'BodyPostsList'> {
    name?: string | undefined;
    postsListIdentifier: "All" | "Series" | "Category" | "Tag" | "Author";
    limitPerPage: number;
}