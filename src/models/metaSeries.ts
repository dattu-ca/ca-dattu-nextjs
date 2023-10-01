import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";

export interface MetaSeries extends BaseModel<'MetaSeries'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    name: string;
    contentBlocks?: BlocksBodyContent[] | undefined;
}