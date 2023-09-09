'use server';
import {IBodyFormJson} from "~/models";
import {googleRecaptchaServices} from "../google.recaptcha";
import {formsDbServices} from "~/services.db";
import {sanitize} from "~/utils/utils";


const saveForm = async (recaptchaToken: string,
                        formId: string,
                        formJson: IBodyFormJson,
                        formValues: Record<string, any>
) => {

    try {

        for (const k of Object.keys(formValues)){
            formValues[k] = sanitize`${formValues[k]}`
        }

        await googleRecaptchaServices.verifyCaptcha(recaptchaToken);
        return await formsDbServices.save({
            data: {
                formId,
                formJson,
                formValues
            }
        });
    } catch (e) {
        console.error(e);
        throw new Error('Error while submitting the form.')
    }
}
export {
    saveForm
}