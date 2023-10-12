import { defineArrayMember, defineField, defineType } from 'sanity';
import { BiSolidBookContent } from "react-icons/bi";

const bodyContentSchema = defineType({
    name: 'bodyContent',
    title: 'Body - Content',
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
            name: 'description',
            title: 'description',
            type: 'array',
            of: [
                defineArrayMember({ 
                    type: 'block',
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'H5', value: 'h5'},
                        {title: 'H6', value: 'h6'},
                        {title: 'Quote', value: 'blockquote'}
                      ]
                 }),
                defineArrayMember({ type: 'image' }),
                defineArrayMember({ type: 'code' })
            ],
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    bodyContentSchema
};
