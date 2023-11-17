import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";


export interface AllPosts extends BaseModel<'AllPosts'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    displayHeading?: string | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
    
    postsListData?: BodyPostsList | undefined;
}