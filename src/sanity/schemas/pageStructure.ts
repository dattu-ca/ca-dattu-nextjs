// Define the actions that should be available for singleton documents

import {type DocumentDefinition} from 'sanity'
import {type StructureResolver} from 'sanity/desk';


import {authPagesConfigSchema} from "./singletons/authPagesConfig.schema";
import {siteConfigSchema} from "./singletons/siteConfig.schema";
import {blogPageSchema} from "./documents/blogPage.schema";
import {blogPostSchema} from "./documents/blogPost.schema";


// Define the singleton document types
export const singletonTypes = new Set([authPagesConfigSchema, siteConfigSchema]);
export const mainTypes = new Set([blogPostSchema, blogPageSchema]);


// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
    singleTonArray: DocumentDefinition[],
    mainTypes: DocumentDefinition[],
): StructureResolver => {
    return (S) => {

        const singletonItems = singleTonArray.map((typeDef) => {
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
            .filter((listItem) => [...mainTypes].find((item) => item.name === listItem.getId()))

        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems()
            .filter((listItem) => ![...singleTonArray, ...mainTypes].find((item) => item.name === listItem.getId()))

        return S.list()
            .title('Content')
            .items([...mainItems, S.divider(), ...defaultListItems, S.divider(), ...singletonItems]);


    }
}