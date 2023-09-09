import { doValidation } from './validation';
import { flattenFields } from './flattenFields';
import { saveForm } from './services';

export const formsServices = {
    saveForm,
    doValidation,
    flattenFields,
}