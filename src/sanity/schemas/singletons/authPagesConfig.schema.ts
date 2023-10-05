import {defineField, defineType} from 'sanity'
import {FaSignInAlt} from "react-icons/fa";



const authPagesConfigSchema = defineType({
    name: 'authPagesConfig',
    title: 'Auth Pages Config',
    type: 'document',
    icon: FaSignInAlt,
    fields: [
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
    ],
    preview: {
        prepare() {
            return {
                title: 'Auth Pages Config',
            }
        },
    },
});

export {
    authPagesConfigSchema
};