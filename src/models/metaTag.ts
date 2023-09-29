import {BaseModel} from "./types";

export interface MetaTag extends BaseModel<'MetaTag'> {
    slug: string;
    name: string;
    description?: object | undefined;
}