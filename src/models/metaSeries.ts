import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BlogPost} from "./blogPost";
import {BlogAuthor} from "~/models/blogAuthor";
import {BodyPostsList} from "~/models/bodyPostsList";

export interface MetaSeries extends BaseModel<'MetaSeries'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    displayName: string;
    contentBlocks?: BlocksBodyContent[] | undefined;
    
    postsListData?: BodyPostsList | undefined;
    
    authorsList: BlogAuthor[];
}