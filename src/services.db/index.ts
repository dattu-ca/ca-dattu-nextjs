import './db.config';
import {save as saveForms} from './forms';
import { signIn, fetchAuthProfileIdFromProviderData } from "./auth";

export const formsDbServices = {
    save: saveForms
}

export const authDbServices = {
    signIn,
    fetchAuthProfileIdFromProviderData
}
