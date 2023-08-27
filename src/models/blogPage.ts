import {IBodyImage} from "./bodyImage";

export interface IBlogPage {
    slug?: string;
    heading?: string;
    banners: IBodyImage[]
    body?: object;
}