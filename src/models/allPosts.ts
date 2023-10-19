import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";


export interface AllPosts extends BaseModel<'AllPosts'> {
    slug?: string | undefined;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    heading?: string | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
}