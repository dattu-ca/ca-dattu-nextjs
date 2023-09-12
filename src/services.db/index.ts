import {save as saveForms} from './forms';
import {signIn} from './auth';


export const formsDbServices = {
    save: saveForms
}

export const authDbServices = {
    signIn
}
