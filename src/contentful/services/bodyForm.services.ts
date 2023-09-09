// import {client} from "../../client";
// import {content_type, BodyFormSkeleton, mapContentful, CONTENTFUL_BLOG_PAGE_FIELDS} from './model'
// import {IBodyForm} from "~/models";
//
//
//
//
//
// const CONTENTFUL_BLOG_PAGE_FIELDS = {
//     FORM_ID: 'fields.formId',
//     FORM_JSON: 'fields.formJson',
//     SUBMIT_FORM_ENABLED: 'fields.submitFormEnabled',
//     RECAPTCHA_ENABLED: 'fields.recaptchaEnabled',
//     SEND_EMAIL_ENABLED: 'fields.sendEmailEnabled',
//     SUCCESS_MESSAGE: 'fields.successMessage',
//     FAILURE_MESSAGE: 'fields.failureMessage',
//     FROM_EMAIL_KEY: 'fields.fromEmailKey',
// }
//
//
// const content_type = 'bodyForm';
//
//
//
// const getBodyForm = (formId: string) =>
//     client
//         .getEntries<BodyFormSkeleton>({
//             content_type,
//             select: [
//                 CONTENTFUL_BLOG_PAGE_FIELDS.FORM_ID as 'fields',
//                 CONTENTFUL_BLOG_PAGE_FIELDS.FORM_JSON as 'fields',
//                 CONTENTFUL_BLOG_PAGE_FIELDS.SUBMIT_FORM_ENABLED as 'fields',
//                 CONTENTFUL_BLOG_PAGE_FIELDS.RECAPTCHA_ENABLED as 'fields',
//                 CONTENTFUL_BLOG_PAGE_FIELDS.SEND_EMAIL_ENABLED as 'fields',
//                 CONTENTFUL_BLOG_PAGE_FIELDS.SUCCESS_MESSAGE as 'fields',
//                 CONTENTFUL_BLOG_PAGE_FIELDS.FAILURE_MESSAGE as 'fields',
//                 CONTENTFUL_BLOG_PAGE_FIELDS.FROM_EMAIL_KEY as 'fields',
//             ],
//             [CONTENTFUL_BLOG_PAGE_FIELDS.FORM_ID]: formId,
//             include: 10,
//         })
//         .then((response) => {
//             if (response.items.length === 1) {
//                 const item = response.items[0];
//                 return mapContentful(item) as IBodyForm;
//             } else if (response.items.length > 1) {
//                 throw new Error(`Found multiple content for [formId]=${formId}`)
//             }
//             throw new Error(`Cannot find content for [formId]=${formId}`)
//         });
//
//
// export const bodyFormServices = {
//     getBodyForm
// }