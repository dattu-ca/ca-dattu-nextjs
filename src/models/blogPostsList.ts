import {BlocksBodyContent} from "./blocksBodyContent";
import {BaseModel} from "./types";

export interface BlogPostsList extends BaseModel<'BlogPostsList'> {
    slug?: string | undefined;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    heading?: string | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
}