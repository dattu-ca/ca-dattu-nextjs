import {IBodyForm, IBodyFormJson} from "~/models";
import {IBodyFormFields} from "~/contentful/schema/generated";



export type BodyFormSkeleton = {
    fields: IBodyFormFields;
}

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = (raw as BodyFormSkeleton).fields;
    const target: IBodyForm = {
        formId: source.formId,
        failureMessage: source.failureMessage,
        successMessage: source.successMessage,
        sendEmail: source.sendEmail,
        formJson: source.formJson as IBodyFormJson
    };
    
    return target as IBodyForm;

}