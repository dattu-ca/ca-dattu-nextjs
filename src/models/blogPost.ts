import {IBodyImage} from "./bodyImage";

export interface IBlogPost {
    slug?: string;
    heading?: string;
    banners: IBodyImage[]
    body?: object;
    shortBody?: object;
}