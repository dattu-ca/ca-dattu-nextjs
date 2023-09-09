import {IBodyForm} from "~/models";
import { flattenFields} from './flattenFields';

const isEmailValid = (val: string) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(val);
}

export const doValidation = (form: IBodyForm ,id: string, value: string) => {
    const flatFormFields = flattenFields(form);
    
    const error = [];
    const field = flatFormFields.find(f => f.id === id);
    if (field) {
        const validations = field.validations || {};
        if (validations.isRequired === true && !value) {
            error.push('Is Required');
        } else if ("inputType" in field && field.inputType === 'email' && !isEmailValid(value)) {
            error.push('Invalid email format');
        } else if (validations.maxLength && Number.isInteger(+(validations.maxLength)) && value.length > validations.maxLength) {
            error.push(`Exceeded allowed max length of ${validations.maxLength}`);
        }
    }

    return error.length > 0 ? error : undefined;
}