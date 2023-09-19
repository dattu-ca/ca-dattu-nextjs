'use server';
import { FormSubmissionsModel } from './shcema'
import {SERVER_CONFIG} from "~/utils/config.server";
import mongoose from "mongoose";

interface IFormModel {
    legend?: string;
    fields: object[]
}

interface IProps {
    formId: string,
    formModel: IFormModel[],
    formValues: Record<string, any>
}


const save = async ({formId, formModel, formValues}: IProps) => {
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
    save
}