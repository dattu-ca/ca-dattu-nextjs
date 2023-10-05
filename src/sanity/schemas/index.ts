import {type SchemaTypeDefinition} from 'sanity'
import {blogPagSchema} from './documents/blogPage.schema';
import {categorySchema} from './documents/category.schema';


import {bodyYouTubeSchema} from "./objects/bodyYouTube.schema";

import {authPagesConfigSchema} from "./singletons/authPagesConfig.schema";
import {siteConfigSchema} from "./singletons/siteConfig.schema";


const schemaTypes: SchemaTypeDefinition[] = [
    // Singletons
    authPagesConfigSchema,
    siteConfigSchema,
    // Documents
    blogPagSchema,
    categorySchema,
    // Objects
    bodyYouTubeSchema,
];


export {
    schemaTypes,
}