'use server';
import {IBodyFormJson} from "~/models";
import {verifyCaptcha} from "../google.recaptcha";
import {formsDbServices} from "~/services.db";


const saveForm = async (recaptchaToken: string,
                        formId: string,
                        formJson: IBodyFormJson,
                        formValues: Record<string, any>
) => {

    try {

        await verifyCaptcha(recaptchaToken);
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