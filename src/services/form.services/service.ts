'use server';
import {faunaClient, q, DB_COLLECTIONS, ICreateResult} from '~/utils/db.config';

import {IBodyForm} from "~/models/bodyForm";
import {SERVER_CONFIG} from "~/utils/config.server";
import {verifyCaptcha} from "../google.recaptcha";


export const doFormSubmission = async (recaptchaToken: string, formId: string, formJson: IBodyForm, values: Record<string, any>) => {

    try {
        
        await verifyCaptcha(recaptchaToken);        
        
        const result = await faunaClient
            .query<ICreateResult>(
                q.Create(DB_COLLECTIONS.FORM_VALUES_COLLECTION, {
                    data: {
                        environment: SERVER_CONFIG.SERVER_CONSTANTS.ENVIRONMENT,
                        formId,
                        formJson,
                        values
                    }
                })
            );
        return {
            id: result['ref']['@ref']?.id,
            message: 'Successfully submitted the form.'
        }
    } catch (error) {
        console.error('Error: ', error)
        throw new Error('Error submitting the form.');
    }

}