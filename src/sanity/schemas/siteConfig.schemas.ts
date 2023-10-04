import {defineArrayMember, defineField, defineType} from 'sanity'

const siteConfig = defineType({
    name: 'siteConfig',
    title: 'Site Configs',
    type: 'document',
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
            name: 'siteTitleTemplate',
            title: 'Site Title Template',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'siteTitleDefault',
            title: 'Site Title Default',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    siteConfig
};