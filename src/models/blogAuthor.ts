import {BaseModel} from "./types";
import {BodyImage} from "./bodyImage";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";


export interface BlogAuthor extends BaseModel<'BlogAuthor'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    displayName: string;
    avatar?: BodyImage | undefined;
    avatarInitials: string;
    contentBlocks?: BlocksBodyContent[] | undefined;
    totalPosts?: number | undefined;
    postsListData?: BodyPostsList | undefined;
}