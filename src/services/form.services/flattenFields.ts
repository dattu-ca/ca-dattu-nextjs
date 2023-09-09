import {IBodyForm, TBodyFormField} from "~/models";

export const flattenFields = (form: IBodyForm) => {
    let ret: TBodyFormField[] = [];
    for(const model of form.formModel){
        ret = [...ret, ...model.fields];
    }
    return ret;
}