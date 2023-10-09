import {defineField, defineType} from 'sanity';
import {FaHome} from "react-icons/fa";
import {contentBlockSchema} from "../blocks/block.schema";

const homePageSchema = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: FaHome,
    fields: [
        defineField({
            name: 'entryTitle',
            title: 'Entry Title',
            description: 'This is only used for slug creation and display in CMS',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'entryTitle',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'preHeadingContentBlocks',
            title: 'Pre Heading Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: contentBlockSchema.name},
                    ]
                }
            ]
        }),
        defineField({
            name: 'heading',
            title: 'Page Heading',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'contentBlock',
            title: 'Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: contentBlockSchema.name},
                    ]
                }
            ]
        }),
    ]
});

export {
    homePageSchema
}