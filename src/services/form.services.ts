'use server';
import {BodyForm} from "~/models";
import * as googleRecaptchaServices from "./google.recaptcha.services";
import {formsDbServices} from "~/services.db";
import {sanitize} from "~/utils/utils";
import {sendMailServices} from "~/services";
import {bodyFormServices} from "~/sanity/services";
import {flattenFields} from "~/utils/form.utils";
import {SERVER_CONFIG} from "~/utils/config.server";

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
        if (form) {
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
                    subject: `[${SERVER_CONFIG.CONSTANTS.DEFAULT_SITE_NAME}] New form has been submitted: [FormId: ${formId}]`,
                    message,
                    html,
                    from: SERVER_CONFIG.SENDGRID.SITE_EMAIL,
                    to: SERVER_CONFIG.SENDGRID.SITE_EMAIL,
                    replyTo: formValues['email'] || SERVER_CONFIG.SENDGRID.SITE_EMAIL
                });
            }
            return {
                status: 'success',
                message: 'Successfully submitted form.'
            };
        }
        return {
            status: 'error',
            message: 'Error when submitting the form.'
        }
    } catch (e) {
        console.error(e);
        throw new Error('Error when submitting the form.')
    }
}
export {
    saveForm
}