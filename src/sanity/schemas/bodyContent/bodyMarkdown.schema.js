import { defineField, defineType } from 'sanity';
import { FaMarkdown } from "react-icons/fa6";

const bodyMarkdownSchema = defineType({
    name: 'bodyMarkdown',
    title: 'Body - Markdown',
    type: 'document',
    icon: FaMarkdown,
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
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'markdown',
            title: 'Markdown Code',
            type: 'markdown',
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    bodyMarkdownSchema
};
