import faunadb from "faunadb";
import {SERVER_CONFIG} from "~/utils/config.server";
import { client, COLLECTIONS } from '../db.config'

const q = faunadb.query;


interface IProps {
    data: any
}

const save = async ({data}: IProps) => {
    try {
        const result = await client
            .query(
                q.Create(COLLECTIONS.FORM_VALUES, {
                    data: {
                        environment: SERVER_CONFIG.SERVER_CONSTANTS.ENVIRONMENT,
                        data
                    }
                })
            );
        
        console.log('result', result)
        
        return {
            id: result['ref']['@ref']?.id,
            message: 'Successfully submitted the form.'
        }
    } catch (error) {
        console.error('Error: ', error)
        throw new Error('Error saving the form.');
    }
}

export const formsDbServices = {
    save
}