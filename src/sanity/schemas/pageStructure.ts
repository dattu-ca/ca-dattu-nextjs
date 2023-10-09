import {type StructureResolver} from 'sanity/desk';


import {authPagesConfigSchema} from "./singletons/authPagesConfig.schema";
import {siteConfigSchema} from "./singletons/siteConfig.schema";
import {blogPageSchema} from "./mainContent/blogPage.schema";
import {blogPostSchema} from "./mainContent/blogPost.schema";
import { homePageSchema } from './mainContent/homePage.schema'

import {contentBlockSchema} from "./blocks/block.schema";
import {bodyContentSchema} from "./bodyContent/bodyContent.schema";
import {bodyYouTubeSchema} from "./bodyContent/bodyYouTube.schema";


const settingsTypes = [...new Set([ authPagesConfigSchema, siteConfigSchema])];
const singletonTypes = [...new Set([homePageSchema])];
const mainTypes = [...new Set([blogPostSchema, blogPageSchema])];
const bodyTypes = [...new Set([contentBlockSchema, bodyContentSchema, bodyYouTubeSchema])];


export const pageStructure = (): StructureResolver => {
    return (S) => {
        const singletonItems = singletonTypes.map((typeDef) => {
            return S.listItem()
                .title(typeDef.title!)
                .icon(typeDef.icon)
                .child(
                    S.editor()
                        .id(typeDef.name)
                        .schemaType(typeDef.name)
                        .documentId(typeDef.name)
                        .views([
                            S.view.form(),
                        ])
                )
        });
        const settingsItems = settingsTypes.map((typeDef) => {
            return S.listItem()
                .title(typeDef.title!)
                .icon(typeDef.icon)
                .child(
                    S.editor()
                        .id(typeDef.name)
                        .schemaType(typeDef.name)
                        .documentId(typeDef.name)
                        .views([
                            S.view.form(),
                        ])
                )
        });

        const mainItems = S.documentTypeListItems()
            .filter((listItem) => mainTypes.find((item) => item.name === listItem.getId()))

        const bodyItems = S.documentTypeListItems()
            .filter((listItem) => bodyTypes.find((item) => item.name === listItem.getId()))


        const remainingItems = S.documentTypeListItems()
            .filter((listItem) => ![
                ...singletonTypes,
                ...settingsTypes,
                ...mainTypes,
                ...bodyTypes,
            ].find((item) => item.name === listItem.getId()))

        return S.list()
            .title('Content')
            .items([
                ...singletonItems,
                S.divider(),
                ...mainItems,
                S.divider(),
                ...bodyItems,
                S.divider(),
                ...remainingItems,
                S.divider(),
                ...settingsItems,
            ]);


    }
}