import {IBodyForm} from "~/models";
import {IBodyFormFields} from "~/contentful/schema/generated";



export type BodyFormSkeleton = {
    fields: IBodyFormFields;
}

export const mapContentful = (raw: any) => {
    if (!raw) {
        return undefined;
    }
    const source = (raw as BodyFormSkeleton).fields;
    console.log('source', source)
    const target: Partial<IBodyForm> = {};
    
    return target as IBodyForm;

}