import {type SchemaTypeDefinition} from 'sanity'
import {projectSchemas} from './project.schemas';
import {siteConfigSchemas} from './siteConfig.schemas';
import {siteAuthConfigSchemas} from './siteAuthConfig.schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [projectSchemas, siteConfigSchemas, siteAuthConfigSchemas],
}
