import {IBodyImage} from "./bodyImage";

export interface IBodyAuthor {
    slug: string;
    name: string;
    shortBio?: object | undefined;
    avatar: IBodyImage | undefined;
}