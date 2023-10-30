import {BaseModel} from "./types";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";


export interface BlogHome extends BaseModel<'BlogHome'> {
    slug: string;
    contentBlocks?: BlocksBodyContent[] | undefined;
    postsLists: BodyPostsList[];
}