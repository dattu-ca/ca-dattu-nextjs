export interface IBodyFormField {
    id: string;
    fieldType: string;
    validations: {
        isRequired: boolean;
        maxLength?: number;
    }
}

export interface IBodyFormFieldText extends IBodyFormField {
    inputType?: string;
    label?: string;
    defaultValue?: string;
}

export interface IBodyFormFieldTextArea extends IBodyFormField {
    label?: string;
    defaultValue?: string;
}

export type TBodyFormField = IBodyFormField | IBodyFormFieldText | IBodyFormFieldTextArea;

export interface IBodyForm {
    legend?: string;
    fields: TBodyFormField[]
}