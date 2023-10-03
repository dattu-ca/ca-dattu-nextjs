import {BaseModel} from "./types";

export interface BodyContent extends BaseModel<'BodyContent'> {
    name?: string | undefined;
    body?: object | undefined;
}