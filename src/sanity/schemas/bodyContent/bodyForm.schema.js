import {defineField, defineType} from 'sanity';
import {SiReacthookform} from "react-icons/si";
// import {BodyFormJSONEditorControl} from "./controls/bodyFormJSONEditor.control";

const bodyFormSchema = defineType({
    name: 'bodyForm',
    title: 'Body - Form',
    type: 'document',
    icon: SiReacthookform,
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
            name: 'formId',
            title: 'Form ID',
            description: 'This is the form id that will be used to save the form in the database.',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'maxWidth',
            title: 'Max Width',
            type: 'number',
            initialValue: 600
        }),
        defineField({
            name: 'submitFormEnabled',
            title: 'Submit Form Enabled?',
            type: 'boolean',
            initialValue: false,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'recaptchaEnabled',
            title: 'Recaptcha Enabled?',
            type: 'boolean',
            initialValue: false,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'sendEmailEnabled',
            title: 'Send Email Enabled?',
            type: 'boolean',
            initialValue: false,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'successMessage',
            title: 'Success Message',
            description: 'The success toast message.',
            type: 'string',
            initialValue: 'Successfully submitted the form.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'failureMessage',
            title: 'Failure Message',
            description: 'The failure toast message.',
            type: 'string',
            initialValue: 'Failed to submit for form!  Please try again later.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'fromEmailKey',
            title: 'From Email Key',
            type: 'string',
        }),
        defineField({
            name: 'formModel',
            title: 'Form Model',
            type: 'string',
            // components: {
            //     input: BodyFormJSONEditorControl
            // }
        }),
    ]
});

export {
    bodyFormSchema
};
