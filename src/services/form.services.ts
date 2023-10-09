'use server';
import {BodyForm} from "~/models";
import * as googleRecaptchaServices from "./google.recaptcha.services";
import {formsDbServices} from "~/services.db";
import {sanitize} from "~/utils/utils";
import {sendMailServices} from "~/services";
import {bodyFormServices} from "~/contentful/services";
import {flattenFields} from "~/utils/form.utils";

const createMessage = (form: BodyForm, formValues: Record<string, any>) => {
    const fields = flattenFields(form);
    const message = [];
    const html = []
    for (const field of fields) {
        message.push(`${field.label}\n${formValues[field.id]}`)
        html.push(`<strong style="font-size: 16px">${field.label}</strong><br/><div>${String(formValues[field.id]).replace(/\n/g, '<br/>')}</div>`)
    }
    return {
        message: message.join('\n\n'),
        html: html.join('<br/><br/>'),
    }
}

interface IProps {
    recaptchaToken: string | null;
    formId: string;
    formValues: Record<string, any>;
}


const saveForm = async ({recaptchaToken, formId, formValues}: IProps) => {
    try {
        const form = await bodyFormServices.fetchByFormId(formId);

        const {formModel} = form;

        for (const k of Object.keys(formValues)) {
            formValues[k] = sanitize`${formValues[k]}`
        }
        if (form.recaptchaEnabled) {
            await googleRecaptchaServices.verifyCaptcha(recaptchaToken);
        }
        const result = await formsDbServices.save({
            formId,
            formModel,
            formValues
        });
        if (result && form.sendEmailEnabled) {
            const {message, html} = createMessage(form, formValues)
            await sendMailServices.send({
                subject: `[${process.env.DEFAULT_SITE_NAME as string}] New form has been submitted: [FormId: ${formId}]`,
                message,
                html,
                from: process.env.SENDGRID_SITE_EMAIL as string,
                to: process.env.SENDGRID_SITE_EMAIL as string,
                replyTo: formValues['email'] || process.env.SENDGRID_SITE_EMAIL as string
            });
        }
        return {
            status: 'success',
            message: 'Successfully submitted form.'
        };
    } catch (e) {
        console.error(e);
        throw new Error('Error when submitting the form.')
    }
}
export {
    saveForm
}