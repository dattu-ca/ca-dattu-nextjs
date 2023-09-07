'use server';
import {faunaClient, q, DB_COLLECTIONS} from '~/utils/db.config';

import {IBodyForm} from "~/models/bodyForm";
import {CONSTANTS} from "~/utils/constants";


export const doFormSubmission = async (formId: string, formJson: IBodyForm, values: Record<string, any>) => {

    try {
        const result = await faunaClient
            .query(
                q.Create(DB_COLLECTIONS.FORM_VALUES_COLLECTION, {
                    data: {
                        environment: CONSTANTS.ENVIRONMENT,
                        formId,
                        formJson,
                        values
                    }
                })
            );
        console.log(result);
        return {
            id: result.ref['@ref']?.id,
            message: 'Successfully submitted the form.'
        }
    } catch (error) {
        console.error('Error: ', error.message)
        throw new Error('Error submitting the form.');
    }

}