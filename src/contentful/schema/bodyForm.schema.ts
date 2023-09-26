import {BodyForm, BodyFormModel} from "~/models";
import {IBodyFormFields} from "./generated/index";

export type BodyFormSkeleton = {
    contentTypeId: 'bodyForm'
    fields: IBodyFormFields;
}

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = (raw as BodyFormSkeleton).fields;
    const target: BodyForm = {
        contentType: 'BodyForm',
        formId: source.formId,
        maxWidth: source.maxWidth,
        failureMessage: source.failureMessage,
        successMessage: source.successMessage,
        recaptchaEnabled: source.recaptchaEnabled,
        submitFormEnabled: source.submitFormEnabled,
        sendEmailEnabled: source.sendEmailEnabled,
        formModel: source.formModel as BodyFormModel[],
        fromEmailKey: source.fromEmailKey,
    };
    
    return target as BodyForm;

}