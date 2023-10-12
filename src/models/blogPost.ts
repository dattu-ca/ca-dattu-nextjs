import {BaseModel} from "./types";
import {BodyImage} from "./bodyImage";
import {BlogAuthor} from "./blogAuthor";
import {BodyYouTube} from "./bodyYoutube";
import {MetaCategory} from "./metaCategory";
import {MetaTag} from "./metaTag";
import {MetaSeries} from "./metaSeries";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";

export type BlogPostFormat = 'Standard' | 'Aside' | 'Image' | 'Video' | 'Quote' | 'Link';

export interface BlogPost extends BaseModel<'BlogPost'> {
    slug?: string | undefined;
    publishedDate: Date;
    format: BlogPostFormat;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    heading?: string | undefined;
    featuredBanner?: BodyImage | BodyYouTube | undefined;
    excerptBlocks?: BlocksBodyContent[] | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
    authors: BlogAuthor[];
    series: MetaSeries;
    categories?: MetaCategory[];
    tags: MetaTag[];
    postsLists: BodyPostsList[];
}