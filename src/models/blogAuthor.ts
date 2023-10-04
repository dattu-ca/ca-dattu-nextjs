import {BaseModel} from "./types";
import {BodyImage} from "./bodyImage";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";


export interface BlogAuthor extends BaseModel<'BlogAuthor'> {
    slug: string;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    name: string;
    avatar?: BodyImage | undefined;
    avatarInitials: string;
    shortBio?: object | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
    postsLists: BodyPostsList[];
}