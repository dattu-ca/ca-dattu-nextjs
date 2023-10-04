import {defineArrayMember, defineField, defineType} from 'sanity'

const projectSchemas = defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'block'
                })
            ]
        })
    ]
});

export {
    projectSchemas
};