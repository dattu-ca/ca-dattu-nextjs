'use server';
import {BodyForm, BodyFormModel} from "~/models";



export const mapSanity = (raw: any) => {
    return {
        cmsSource: 'Sanity',
        contentType: 'BodyForm',
        sysId: raw.sysId as string,
        formId: raw.formId as string,
        maxWidth: raw.maxWidth,
        failureMessage: raw.failureMessage,
        successMessage: raw.successMessage,
        recaptchaEnabled: raw.recaptchaEnabled,
        submitFormEnabled: raw.submitFormEnabled,
        sendEmailEnabled: raw.sendEmailEnabled,
        formModel: JSON.parse(raw.formModel) as BodyFormModel[],
        fromEmailKey: raw.fromEmailKey,
    } as BodyForm
}