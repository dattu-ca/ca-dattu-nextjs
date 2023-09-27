'use server';
import { FormSubmissionsModel } from './schema'

interface IFormModel {
    legend?: string | undefined;
    fields: object[]
}

interface IProps {
    formId: string,
    formModel: IFormModel[],
    formValues: Record<string, any>
}


const insertInto = async ({formId, formModel, formValues}: IProps) => {
    try {
        const formSubmission = new FormSubmissionsModel({
            formId: formId,
            formModel: formModel,
            formValues: formValues
        });
        const result = await formSubmission.save();
        console.log("result", result);
        return result;


    } catch (e) {
        console.error(e);
    }

}

export {
    insertInto
}