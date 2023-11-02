import { defineField, defineType} from 'sanity';
import {MdFolder} from "react-icons/md";
import {contentBlockSchema} from "~/sanity/schemas/blocks/block.schema";

const categorySchema = defineType({
    name: 'category',
    title: 'Categories',
    type: 'document',
    icon: MdFolder,
    fields: [
        defineField({
            name: 'entryTitle',
            title: 'Entry Title',
            description: 'This is only used for slug creation and display in CMS',
            type: 'string',
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
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'parentCategory',
            title: 'Parent - Category',
            type: 'reference',
            to: [{type: 'category'}],
        }),
        defineField({
            name: 'contentBlocks',
            title: 'Content Blocks',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: contentBlockSchema.name },
                    ]
                }
            ]
        }),
    ]
});

export {
    categorySchema
}