import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";

export interface MetaTag extends BaseModel<'MetaTag'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    displayName: string;
    contentBlocks?: BlocksBodyContent[] | undefined;

    postsListData?: BodyPostsList | undefined;
    
    totalPosts?: number | undefined;
}