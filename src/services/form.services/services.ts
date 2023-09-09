import {IBodyForm, IBodyFormJson} from "~/models";
import {googleRecaptchaServices} from "../google.recaptcha";
import {formsDbServices} from "~/services.db";
import {sanitize} from "~/utils/utils";
import {sendMailServices} from "~/services";


const createMessage = (formJson: IBodyFormJson, formValues: Record<string, any>) => {
    const message = [];
    const html = []
    for (const fieldJson of formJson.fields) {
        message.push(`${fieldJson.label}\n${formValues[fieldJson.id]}`)
        html.push(`<strong style="font-size: 16px">${fieldJson.label}</strong><br/><div>${String(formValues[fieldJson.id]).replace(/\n/g, '<br/>')}</div>`)
    }
    return {
        message: message.join('\n\n'),
        html: html.join('<br/><br/>'),
    }
}

interface IProps {
    recaptchaToken: string;
    form: IBodyForm;
    formValues: Record<string, any>;
}



const saveForm = async ({recaptchaToken, form, formValues}: IProps) => {
    try {
        

        const {formJson} = form;

        for (const k of Object.keys(formValues)) {
            formValues[k] = sanitize`${formValues[k]}`
        }
        if (form.recaptchaEnabled) {
            await googleRecaptchaServices.verifyCaptcha(recaptchaToken);
        }
        const result = await formsDbServices.save({
            data: {
                formId,
                formJson,
                formValues
            }
        });
        if (result && form.sendEmailEnabled) {
            const {message, html} = createMessage(formJson, formValues)
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