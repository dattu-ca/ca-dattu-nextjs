import {IBodyImage} from "./bodyImage";

export interface IBodyAuthor {
    contentType: 'BodyAuthor';
    slug: string;
    name: string;
    shortBio?: object | undefined;
    avatarInitials: string;
    avatar: IBodyImage | undefined;
}