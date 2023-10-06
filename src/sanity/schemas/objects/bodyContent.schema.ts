import {defineArrayMember, defineField, defineType} from 'sanity'

const bodyContentSchema = defineType({
    name: 'bodyContent',
    title: 'Body - Content',
    type: 'object',
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
            name: 'description',
            title: 'description',
            type: 'array',
            of: [defineArrayMember({type: 'block'})],
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    bodyContentSchema
};
