import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BlogPost} from "./blogPost";
import {BlogAuthor} from "~/models/blogAuthor";

export interface MetaSeries extends BaseModel<'MetaSeries'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    name: string;
    contentBlocks?: BlocksBodyContent[] | undefined;

    
    postsLists: BlogPost[];
    authorsList: BlogAuthor[];
}