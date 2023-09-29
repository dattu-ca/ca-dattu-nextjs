import {BaseModel} from "./types";

export interface MetaSeries extends BaseModel<'MetaSeries'> {
    slug: string;
    name: string;
    description?: object | undefined;
}