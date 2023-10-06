import {type SchemaTypeDefinition} from 'sanity'
import {blogPageSchema} from './documents/blogPage.schema';
import {blogPostSchema} from './documents/blogPost.schema';

import {categorySchema} from './metas/category.schema';
import {tagSchema} from './metas/tag.schema';
import {seriesSchema} from "./metas/series.schema";
import {authorSchema} from "./metas/author.schema";

import {bodyYouTubeSchema} from "./objects/bodyYouTube.schema";
import {bodyContentSchema} from "./objects/bodyContent.schema";
import {blocksBodyContentSchema} from "./objects/blocksBodyContent.schema";

import {authPagesConfigSchema} from "./singletons/authPagesConfig.schema";
import {siteConfigSchema} from "./singletons/siteConfig.schema";




const schemaTypes: SchemaTypeDefinition[] = [
    // Singletons
    authPagesConfigSchema,
    siteConfigSchema,
    // Main Documents
    blogPageSchema,
    blogPostSchema,
    // Other Documents
    authorSchema,
    seriesSchema,
    categorySchema,
    tagSchema,
    // Objects
    blocksBodyContentSchema,
    bodyContentSchema,
    bodyYouTubeSchema,
];


export {
    schemaTypes,
}