import {defineField, defineType} from 'sanity';
import {FaLink} from "react-icons/fa";

const bodyLinksSchema = defineType({
    name: 'bodyLinks',
    title: 'Body - Links',
    type: 'document',
    icon: FaLink,
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
            name: 'links',
            title: 'Links',
            type: 'bodyLinksField'
        })
    ]
});

export {
    bodyLinksSchema
};
