import { BaseModel } from "./types";
export interface BodyMarkdown extends BaseModel<'BodyMarkdown'> {
    displayName?: string | undefined;
    markdown: string;
}