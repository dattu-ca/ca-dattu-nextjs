import {IBodyForm, IBodyFormJson} from "~/models";
import {IBodyFormFields} from "../../schema/generated";
import {Entry} from "contentful";
//
//
//
//
// export const CONTENTFUL_BLOG_PAGE_FIELDS = {
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
// export const content_type = 'bodyForm';
//
//
//
export type BodyFormSkeleton = {
    contentTypeId: 'bodyForm'
    fields: IBodyFormFields;
}

export const mapContentful = (raw: Entry<BodyFormSkeleton, undefined, string>) => {
    if (!raw) {
        return undefined;
    }
    const source = (raw as BodyFormSkeleton).fields;
    const target: IBodyForm = {
        formId: source.formId,
        failureMessage: source.failureMessage,
        successMessage: source.successMessage,
        recaptchaEnabled: source.recaptchaEnabled,
        submitFormEnabled: source.submitFormEnabled,
        sendEmailEnabled: source.sendEmailEnabled,
        formJson: source.formJson as IBodyFormJson,
        fromEmailKey: source.fromEmailKey,
    };
    
    return target as IBodyForm;

}