import {BaseModel} from "./types";
import {BlogAuthor} from "./blogAuthor";
import {MetaCategory} from "./metaCategory";
import {MetaTag} from "./metaTag";
import {MetaSeries} from "./metaSeries";
import {BlocksBodyContent} from "./blocksBodyContent";
import {BodyPostsList} from "./bodyPostsList";

export type BlogPostFormat = 'Standard' | 'Aside' | 'Image' | 'Video' | 'Quote' | 'Link';

export interface BlogPost extends BaseModel<'BlogPost'> {
    slug: string;
    displayHeading?: string | undefined;
    datePublished: Date;
    publishStatus?: string | undefined;
    format: BlogPostFormat;
    preHeadingContentBlocks?: BlocksBodyContent[] | undefined;
    excerptBlocks?: BlocksBodyContent[] | undefined;
    preHeadingExcerptBlocks?: BlocksBodyContent[] | undefined;
    contentBlocks?: BlocksBodyContent[] | undefined;
    authors: BlogAuthor[];
    series: MetaSeries;
    categories?: MetaCategory[];
    tags: MetaTag[];

    seriesPostsListData?: BodyPostsList | undefined;
}