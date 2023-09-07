import faunadb from 'faunadb';
import {SERVER_CONFIG} from "~/utils/config.server";

const faunaClient = new faunadb.Client({
    secret: SERVER_CONFIG.FAUNA_DB.SECRET
});
const q = faunadb.query;

const DB_COLLECTIONS = {
    FORM_VALUES_COLLECTION: q.Collection('formValuesCollection')
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


export {faunaClient, q, DB_COLLECTIONS};

