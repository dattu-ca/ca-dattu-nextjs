import {type SchemaTypeDefinition} from 'sanity'
import {blogPageSchema} from './documents/blogPage.schema';
import {blogPostSchema} from './documents/blogPost.schema';

import {categorySchema} from './metas/category.schema';
import {tagSchema} from './metas/tag.schema';


import {bodyYouTubeSchema} from "./objects/bodyYouTube.schema";

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
    categorySchema,
    tagSchema,
    // Objects
    bodyYouTubeSchema,
];


export {
    schemaTypes,
}