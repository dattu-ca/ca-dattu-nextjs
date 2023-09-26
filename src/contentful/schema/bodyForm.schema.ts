import {BodyForm, BodyFormModel} from "~/models";
import {IBodyFormFields} from "./generated/index";

export type BodyFormSkeleton = {
    contentTypeId: 'bodyForm'
    fields: IBodyFormFields;
    sys:{
        id: string;
    }
}

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = raw as BodyFormSkeleton;
    const fields = source.fields;
    const target: BodyForm = {
        contentType: 'BodyForm',
        sysId: source.sys.id,
        formId: fields.formId,
        maxWidth: fields.maxWidth,
        failureMessage: fields.failureMessage,
        successMessage: fields.successMessage,
        recaptchaEnabled: fields.recaptchaEnabled,
        submitFormEnabled: fields.submitFormEnabled,
        sendEmailEnabled: fields.sendEmailEnabled,
        formModel: fields.formModel as BodyFormModel[],
        fromEmailKey: fields.fromEmailKey,
    };
    
    return target as BodyForm;

}