import { defineField, defineType } from 'sanity';
import { FaCode } from "react-icons/fa6";

const bodyCodeSchema = defineType({
    name: 'bodyCode',
    title: 'Body - Code',
    type: 'document',
    icon: FaCode,
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
            name: 'code',
            title: 'Code',
            type: 'code',
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    bodyCodeSchema
};
