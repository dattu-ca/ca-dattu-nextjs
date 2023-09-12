import faunadb from 'faunadb';
import {SERVER_CONFIG} from "~/utils/config.server";


const COLLECTIONS = {
    FORM_VALUES: 'formValuesCollection',
    AUTH_PROFILE: 'authProfileCollection',
    AUTH_PROVIDER: 'authProviderCollection',
    DATTU_TESTING: 'dattuTesting',
}

const client = new faunadb.Client({
    secret: SERVER_CONFIG.FAUNA_DB.SECRET
});

const q = faunadb.query;

export interface ICreateResult<T = object> {
    ref: {
        '@ref': {
            id: number;
        }
    };
    ts: number;
    data: T;
}


export {client, q, COLLECTIONS};

