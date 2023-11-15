import {defineField, defineType} from 'sanity';
import {BiSolidBookContent} from "react-icons/bi";

const bodyPostsListSchema = defineType({
    name: 'bodyPostsList',
    title: 'Body - Posts List',
    type: 'document',
    icon: BiSolidBookContent,
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
            name: 'showName',
            title: 'Show Name?',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'postsList',
            title: 'Posts List',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [

                        {type: "blogPost"},
                    ]
                }
            ]
        }),
        defineField({
            name: 'layout',
            title: 'Layout Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Excerpt', value: 'Excerpt'},
                    {title: 'Heading Only', value: 'Heading Only'},
                    {title: 'Full Post', value: 'Full Post'},
                ]
            },
            initialValue: 'Heading Only',
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    bodyPostsListSchema
};
