import { defineField, defineType } from 'sanity';
import { FaMarkdown } from "react-icons/fa6";

const bodyMarkdownSchema = defineType({
    name: 'bodyMarkdown',
    title: 'Body - Markdown',
    type: 'document',
    icon: FaMarkdown,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'This is only used for slug creation and display in CMS',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'displayName',
            title: 'Display Name',
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
