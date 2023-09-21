// import './db.config';
import {insertInto as saveForms} from './forms';
import { signIn, fetchAuthProfileIdFromProviderData } from "./auth";


export const formsDbServices = {
    save: saveForms
}

export const authDbServices = {
    signIn,
    fetchAuthProfileIdFromProviderData
}

export const userDbServices = {
    
}
