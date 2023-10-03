import {BaseModel} from "./types";

export interface BodyPostsList extends BaseModel<'BodyPostsList'> {
    postsListIdentifier: "All" | "Series" | "Category" | "Tag" | "Author";
    limitPerPage: number;
}