import { defineField, defineType } from 'sanity';
import { BiSolidBookContent } from "react-icons/bi";
import { blockFieldSchema } from './block.field';

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
            title: 'Description',
            type: blockFieldSchema.name,
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    bodyContentSchema
};
