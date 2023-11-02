import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";


export interface AllPosts extends BaseModel<'AllPosts'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    heading?: string | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;

    postsLists: BodyPostsList[];
    totalPosts?: number | undefined;
}