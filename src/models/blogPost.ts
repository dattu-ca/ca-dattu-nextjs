import {IBodyImage} from "./bodyImage";
import {IBodyAuthor} from "./bodyAuthor";

export interface IBlogPost {
    slug?: string;
    heading?: string;
    banners: IBodyImage[]
    body?: object;
    shortBody?: object;
    publishedDate: Date;
    authors: IBodyAuthor[]
}