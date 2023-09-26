import {IBodyImage} from "./bodyImage";

export interface IBodyAuthor {
    slug: string;
    name: string;
    shortBio?: object | undefined;
    avatarInitials: string;
    avatar: IBodyImage | undefined;
}