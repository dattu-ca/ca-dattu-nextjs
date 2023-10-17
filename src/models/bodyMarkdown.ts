import { BaseModel } from "./types";
export interface BodyMarkdown extends BaseModel<'BodyMarkdown'> {
    name?: string | undefined;
    markdown: string;
}