import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { codeInput } from '@sanity/code-input';
import { media } from 'sanity-plugin-media';
import { markdownSchema } from 'sanity-plugin-markdown';
import { pexelsImageAsset } from 'sanity-plugin-asset-source-pexels';
import { table } from '@sanity/table';
import { iconify } from 'sanity-plugin-iconify';
// @ts-ignore
import { giphyAssetSourcePlugin } from "sanity-plugin-asset-source-giphy";


import { apiVersion, dataset, projectId } from '~/sanity/env';
import { schemaTypes } from '~/sanity/schemas/';
import { pageStructure } from '~/sanity/schemas/pageStructure';

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
            structure: pageStructure(),
        }),

        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
        media(),
        table(),
        markdownSchema(),
        unsplashImageAsset(),
        pexelsImageAsset({
            API_KEY: process.env.NEXT_PUBLIC_PEXEL_API_KEY as string,
        }),
        giphyAssetSourcePlugin({
            apiKey: process.env.NEXT_PUBLIC_GIPHY_API_KEY as string,
        }),
        codeInput(),
        iconify(),
    ],
})
