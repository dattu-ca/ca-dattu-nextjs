import {type SchemaTypeDefinition} from 'sanity'
import {projectSchemas} from './project.schemas';
import {siteConfigSchemas} from './siteConfig.schemas';
import {authConfigSchemas} from './authConfig.schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [projectSchemas, siteConfigSchemas, authConfigSchemas],
}
