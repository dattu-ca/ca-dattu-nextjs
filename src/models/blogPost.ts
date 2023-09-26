import {IBodyImage} from "./bodyImage";
import {IBlogAuthor} from "./blogAuthor";
import {IBodyYoutube} from "~/models/bodyYoutube";

export interface IBlogPost {
    contentType: 'BlogPost';
    slug?: string;
    heading?: string;
    banners: (IBodyImage | IBodyYoutube)[];
    body?: object;
    shortBody?: object;
    publishedDate: Date;
    authors: IBlogAuthor[]
}