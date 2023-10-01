import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";

export interface MetaTag extends BaseModel<'MetaTag'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    name: string;
    contentBlocks?: BlocksBodyContent[] | undefined;
}