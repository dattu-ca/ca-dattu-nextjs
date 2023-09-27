import {BodyImage} from "./bodyImage";
import {BodyYoutube} from "./bodyYoutube";

export interface BlogAuthor {
    sysId?: string | undefined;
    contentType: 'BlogAuthor';
    slug: string;
    name: string;
    shortBio?: object | undefined;
    bio?: object | undefined;
    banners: (BodyImage | BodyYoutube)[];
    avatarInitials: string;
    avatar?: BodyImage | undefined;
}