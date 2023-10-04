import {defineArrayMember, defineField, defineType} from 'sanity'

const authConfigSchemas = defineType({
    name: 'authConfig',
    title: 'Auth Configs',
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
            name: 'loginTitle',
            title: 'Title for the Login Box',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'loginButton',
            title: 'Text for the Login Button',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'logoutTitle',
            title: 'Title for the Logout Box',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'logoutButton',
            title: 'Text for the Logout Button',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'errorTitle',
            title: 'Title for the Error Box',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'errorButton',
            title: 'Text for the Error Link',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ]
});

export {
    authConfigSchemas
};