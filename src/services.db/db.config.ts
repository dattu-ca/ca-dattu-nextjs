import faunadb from 'faunadb';
import {SERVER_CONFIG} from "~/utils/config.server";
import { COLLECTIONS } from './collectionNames'


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

