import {BaseModel} from "./types";

export interface BodyContent extends BaseModel<'BodyContent'> {
    displayName?: string | undefined;
    body?: object | undefined;
}