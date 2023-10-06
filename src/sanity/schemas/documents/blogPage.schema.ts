import {defineField, defineType} from 'sanity';
import {BsBook} from "react-icons/bs";

const blogPageSchema = defineType({
    name: 'blogPage',
    title: 'Blog - Page',
    type: 'document',
    icon: BsBook,
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
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'heading',
            title: 'Page Heading',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    blogPageSchema
}