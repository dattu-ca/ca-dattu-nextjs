import {IBodyImage} from "./bodyImage";
import {IBodyYoutube} from "./bodyYoutube";

export interface IBlogAuthor {
    contentType: 'BlogAuthor';
    slug: string;
    name: string;
    shortBio?: object | undefined;
    bio?: object | undefined;
    banners: (IBodyImage | IBodyYoutube)[];
    avatarInitials: string;
    avatar: IBodyImage | undefined;
}