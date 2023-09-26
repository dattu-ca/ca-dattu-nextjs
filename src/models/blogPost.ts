import {BodyImage} from "./bodyImage";
import {BlogAuthor} from "./blogAuthor";
import {BodyYoutube} from "~/models/bodyYoutube";

export interface BlogPost {
    contentType: 'BlogPost';
    slug?: string;
    heading?: string;
    banners: (BodyImage | BodyYoutube)[];
    body?: object;
    shortBody?: object;
    publishedDate: Date;
    authors: BlogAuthor[]
}