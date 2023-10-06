import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from '~/sanity/env';
import {schemaTypes} from '~/sanity/schemas/';
import {singletonTypes, mainTypes, pageStructure} from '~/sanity/schemas/pageStructure';

// @ts-ignore
export default defineConfig({
    basePath: '/cms',
    projectId,
    dataset,
    name: 'ca-dattu-cms',
    title: "dattu.ca CMS",
    apiVersion: apiVersion,
    // Add and edit the content schema in the './sanity/schema' folder
    schema: {
        types: schemaTypes,
    },
    plugins: [
        deskTool({
            structure: pageStructure([...singletonTypes], [...mainTypes]),
        }),
        
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({defaultApiVersion: apiVersion}),
    ],
})
