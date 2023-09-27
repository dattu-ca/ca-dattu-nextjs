import {BodyImage} from "./bodyImage";
import {BlogAuthor} from "./blogAuthor";
import {BodyYoutube} from "~/models/bodyYoutube";

export interface BlogPost {
    sysId?: string | undefined;
    contentType: 'BlogPost';
    slug?: string | undefined;
    heading?: string | undefined;
    banners: (BodyImage | BodyYoutube)[];
    featuredBanner?: BodyImage | BodyYoutube | undefined;
    body?: object | undefined;
    shortBody?: object | undefined;
    publishedDate: Date;
    authors: BlogAuthor[],
    categories?: MetaCategory[];
}