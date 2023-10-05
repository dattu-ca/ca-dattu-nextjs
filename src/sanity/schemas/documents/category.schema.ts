import {defineArrayMember, defineField, defineType} from 'sanity';

const categorySchema = defineType({
    name: 'category',
    title: 'Category',
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
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'parentCategory',
            title: 'Parent - Category',
            type: 'reference',
            to: [{type: 'category'}],
        }),
    ]
});

export {
    categorySchema
}