import {type SchemaTypeDefinition} from 'sanity'
import { homePageSchema } from './mainContent/homePage.schema';
import {blogPageSchema} from './mainContent/blogPage.schema';
import {blogPostSchema} from './mainContent/blogPost.schema';

import {categorySchema} from './metas/category.schema';
import {tagSchema} from './metas/tag.schema';
import {seriesSchema} from "./metas/series.schema";
import {authorSchema} from "./metas/author.schema";


import {bodyYouTubeSchema} from "./bodyContent/bodyYouTube.schema";
import {bodyContentSchema} from "./bodyContent/bodyContent.schema";

import {authPagesConfigSchema} from "./singletons/authPagesConfig.schema";
import {siteConfigSchema} from "./singletons/siteConfig.schema";


import { contentBlockSchema } from './blocks/block.schema';
import {blockWidthSchema} from "./blocks/blockWidth.schema";
import {blockGapsSchema} from "./blocks/blockGaps.schema";
import {columnSizesSchema} from "./blocks/columnSizes.schema";
import {contentColumnSchema} from "./blocks/contentColumn.schema";
import {columnGapsSchema} from "./blocks/columnGaps.schema";




const schemaTypes: SchemaTypeDefinition[] = [
    // Singletons
    authPagesConfigSchema,
    siteConfigSchema,
    
    // Main Documents
    homePageSchema,
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
    
    // Content schemas
    bodyContentSchema,
    bodyYouTubeSchema,
];


export {
    schemaTypes,
}