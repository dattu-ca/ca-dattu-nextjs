import { type SchemaTypeDefinition } from 'sanity'
import {project} from './project.schemas';
import {siteConfig} from './siteConfig.schemas';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [ project, siteConfig ],
}
