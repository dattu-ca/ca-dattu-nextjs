import {type SchemaTypeDefinition} from 'sanity'
import {allPostsSchema} from './mainContent/allPosts.schema';
import {homePageSchema} from './mainContent/homePage.schema';
import {blogPageSchema} from './mainContent/blogPage.schema';
import {blogPostSchema} from './mainContent/blogPost.schema';

import {categorySchema} from './metas/category.schema';
import {tagSchema} from './metas/tag.schema';
import {seriesSchema} from "./metas/series.schema";
import {authorSchema} from "./metas/author.schema";


import {bodyYouTubeSchema} from "./bodyContent/bodyYouTube.schema";
import {bodyContentSchema} from "./bodyContent/bodyContent.schema";
import {bodyImagesSchema} from './bodyContent/bodyImages.schema';
import {bodyLinksSchema} from './bodyContent/bodyLinks.schema';
import {bodyLinksFieldSchema} from './bodyContent/bodyLinksField.schema';
import {bodyFormSchema} from './bodyContent/bodyForm.schema';
import{bodyPostsListSchema} from './bodyContent/bodyPostsList.schema';
import{bodyCodeSchema} from './bodyContent/bodyCode.schema';
import{bodyMarkdownSchema} from './bodyContent/bodyMarkdown.schema';

import {authPagesConfigSchema} from "./singletons/authPagesConfig.schema";
import {siteConfigSchema} from "./singletons/siteConfig.schema";
import {siteNavbarSchema} from './singletons/siteNavbar.schema';
import {siteFooterSchema} from './singletons/siteFooter.schema';

import {contentBlockSchema} from './blocks/block.schema';
import {blockWidthSchema} from "./blocks/blockWidth.schema";
import {blockGapsSchema} from "./blocks/blockGaps.schema";
import {columnSizesSchema} from "./blocks/columnSizes.schema";
import {contentColumnSchema} from "./blocks/contentColumn.schema";
import {columnGapsSchema} from "./blocks/columnGaps.schema";
import { blockFieldSchema } from './bodyContent/block.field';

import { playgroundSchema } from './playground/playground.schema';


const schemaTypes: SchemaTypeDefinition[] = [
    // Singletons
    authPagesConfigSchema,
    siteConfigSchema,
    siteNavbarSchema,
    siteFooterSchema,

    // Content schemas
    bodyContentSchema,
    bodyYouTubeSchema,
    bodyImagesSchema,
    bodyCodeSchema,
    bodyMarkdownSchema,
    bodyLinksSchema,
    bodyLinksFieldSchema,
    bodyFormSchema,
    bodyPostsListSchema,

    // Main Documents
    homePageSchema,
    allPostsSchema,
    blogPageSchema,
    blogPostSchema,

    // Other Documents
    authorSchema,
    seriesSchema,
    categorySchema,
    tagSchema,

    // type schemas
    contentBlockSchema,
    blockWidthSchema,
    blockGapsSchema,
    columnSizesSchema,
    contentColumnSchema,
    columnGapsSchema,

    playgroundSchema,
    blockFieldSchema,
];


export {
    schemaTypes,
}