import faunadb, { Expr } from 'faunadb';
import {SERVER_CONFIG} from "~/utils/config.server";

const client = new faunadb.Client({
    secret: SERVER_CONFIG.FAUNA_DB.SECRET
});

const q = faunadb.query;

const COLLECTIONS = {
    FORM_VALUES: 'formValuesCollection'
}

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

