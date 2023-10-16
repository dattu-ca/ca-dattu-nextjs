import { BaseModel } from "./types";
export interface BodyCode extends BaseModel<'BodyCode'> {
    name?: string | undefined;
    code: string;
    language?: string | undefined;
}