import { defineField, defineType} from 'sanity';
import {FaHashtag} from "react-icons/fa6";

const tagSchema = defineType({
    name: 'tag',
    title: 'Tags',
    type: 'document',
    icon: FaHashtag,
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
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    tagSchema
}