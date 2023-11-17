import {defineField, defineType} from 'sanity';
import {FaLink} from "react-icons/fa";

const bodyLinksSchema = defineType({
    name: 'bodyLinks',
    title: 'Body - Links',
    type: 'document',
    icon: FaLink,
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
            name: 'links',
            title: 'Links',
            type: 'bodyLinksField'
        })
    ]
});

export {
    bodyLinksSchema
};
