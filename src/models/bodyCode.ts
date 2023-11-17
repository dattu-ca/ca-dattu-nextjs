import { BaseModel } from "./types";
export interface BodyCode extends BaseModel<'BodyCode'> {
    displayName?: string | undefined;
    code: string;
    language?: string | undefined;
}