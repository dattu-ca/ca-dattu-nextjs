import faunadb from 'faunadb';
import {SERVER_CONFIG} from "~/utils/config.server";

const client = new faunadb.Client({
    secret: SERVER_CONFIG.FAUNA_DB.SECRET
});

const COLLECTIONS = {
    FORM_VALUES: 'formValuesCollection'
}

export interface ICreateResult {
    ref: {
        '@ref': {
            id: number
        }
    },
    ts: number,
    data: object

}


export {client, COLLECTIONS};

