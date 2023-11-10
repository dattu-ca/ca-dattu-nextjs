import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BlogPost} from "./blogPost";
import {BodyPostsList} from "~/models/bodyPostsList";


export interface AllPosts extends BaseModel<'AllPosts'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    heading?: string | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
    
    postsListData?: BodyPostsList | undefined;
}