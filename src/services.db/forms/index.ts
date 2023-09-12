'use server';
import {SERVER_CONFIG} from "~/utils/config.server";
import {client, q, COLLECTIONS, ICreateResult} from '../db.config'



interface IProps {
    data: any
}

const save = async ({data}: IProps) => {
    try {
        const result = await client
            .query<ICreateResult>(
                q.Create(COLLECTIONS.FORM_VALUES, {
                    data: {
                        environment: SERVER_CONFIG.SERVER_CONSTANTS.ENVIRONMENT,
                        createdData: Date.now(),
                        ...data,
                    }
                })
            );

        return {
            id: result['ref']['@ref']?.id,
            data: result.data,
            message: 'Successfully saved the form.',
        }
    } catch (error) {
        console.error('Error: ', error)
        throw new Error('Error saving the form.');
    }
}

export {
    save
}