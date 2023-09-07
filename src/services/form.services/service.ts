'use server';
import {faunaClient, q, DB_COLLECTIONS, ICreateResult} from '~/utils/db.config';

import {IBodyForm} from "~/models/bodyForm";
import {SERVER_CONSTANTS} from "~/utils/constants.server";


export const doFormSubmission = async (formId: string, formJson: IBodyForm, values: Record<string, any>) => {

    try {
        const result = await faunaClient
            .query<ICreateResult>(
                q.Create(DB_COLLECTIONS.FORM_VALUES_COLLECTION, {
                    data: {
                        environment: SERVER_CONSTANTS.ENVIRONMENT,
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