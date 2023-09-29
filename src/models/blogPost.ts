import {BaseModel} from "./types";
import {BodyImage} from "./bodyImage";
import {BlogAuthor} from "./blogAuthor";
import {BodyYoutube} from "./bodyYoutube";
import {MetaCategory} from "./metaCategory";
import {MetaTag} from "./metaTag";
import {MetaSeries} from "./metaSeries";
import {BlocksBodyContent} from "./blocksBodyContent";


export interface BlogPost  extends BaseModel<'BlogPost'> {
    slug?: string | undefined;
    heading?: string | undefined;
    excerptBlocks?: BlocksBodyContent[] | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
    banners: (BodyImage | BodyYoutube)[];
    featuredBanner?: BodyImage | BodyYoutube | undefined;
    body?: object | undefined;
    shortBody?: object | undefined;
    publishedDate: Date;
    authors: BlogAuthor[],
    categories?: MetaCategory[];
    tags: MetaTag[];
    series: MetaSeries;
}