import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BlogPost} from "./blogPost";


export interface BlogHome extends BaseModel<'BlogHome'> {
    slug?: string | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
}