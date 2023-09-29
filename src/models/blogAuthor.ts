import {BaseModel} from "./types";
import {BodyImage} from "./bodyImage";
import {BodyYoutube} from "./bodyYoutube";
import {BlocksBodyContent} from "./blocksBodyContent";


export interface BlogAuthor extends BaseModel<'BlogAuthor'> {
    slug: string;
    name: string;
    contentBlocks?: BlocksBodyContent[] | undefined;
    shortBio?: object | undefined;
    bio?: object | undefined;
    banners: (BodyImage | BodyYoutube)[];
    avatarInitials: string;
    avatar?: BodyImage | undefined;
}