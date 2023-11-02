import {defineField, defineType} from 'sanity';
import {BsCollection} from "react-icons/bs";
import {contentBlockSchema} from "~/sanity/schemas/blocks/block.schema";

const seriesSchema = defineType({
    name: 'series',
    title: 'Series',
    description: 'The series with which a list of posts belong to.',
    type: 'document',
    icon: BsCollection,
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
    seriesSchema
}