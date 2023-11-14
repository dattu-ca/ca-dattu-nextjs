import { defineField, defineType} from 'sanity';
import {BiSolidBookContent} from "react-icons/bi";
// import { blogPostSchema} from "../mainContent/blogPost.schema";
// import { blogPageSchema} from "../mainContent/blogPage.schema";

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
        // defineField({
        //     name: 'postsList',
        //     title: 'Posts List',
        //     type: 'array',
        //     of: [
        //         {
        //             type: 'reference',
        //             to: [
        //                 // {type: "blogPostSchema"},
        //                 // {type: blogPageSchema.name}
        //             ]
        //         }
        //     ]
        // }),
        defineField({
            name: 'postsListIdentifier',
            title: 'Posts List Identifier',
            type: 'string',
            initialValue: 'Custom',
            options: {
                list: [
                    {title: 'Custom', value: 'Custom'},                    
                ]
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'limitPerPage',
            title: 'Limit Per Page',
            description: '0 means default',
            type: 'number',
            initialValue: 10,
            validation: (rule) => rule.required().min(0),
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
            initialValue: 'Excerpt',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'isPaginated',
            title: 'Is Paginated',
            description: 'Whether this will be a paginated list of do we show all available posts on the same page.',
            type: 'boolean',
            initialValue: true,
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    bodyPostsListSchema
};
