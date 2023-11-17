import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";


export interface HomePage extends BaseModel<'HomePage'> {
    slug: string;
    displayHeading?: string | undefined;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
    
    postsListData?: BodyPostsList | undefined;
}