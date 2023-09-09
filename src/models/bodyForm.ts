export interface IBodyFormFieldValidations {
    isRequired: boolean;
    maxLength?: number;
}

export interface IBodyFormField {
    id: string;
    fieldType: string;
    label?: string;
    validations: Partial<IBodyFormFieldValidations>
}

export interface IBodyFormFieldText extends IBodyFormField {
    inputType?: string;
    defaultValue?: string;
}

export interface IBodyFormFieldTextArea extends IBodyFormField {
    defaultValue?: string;
}

export type TBodyFormField = IBodyFormField | IBodyFormFieldText | IBodyFormFieldTextArea;


export interface IBodyFormModel {
    legend?: string;
    fields: TBodyFormField[];
}

export interface IBodyForm {
    formId: string;
    formModel: IBodyFormModel[]
    recaptchaEnabled: boolean;
    submitFormEnabled: boolean;
    sendEmailEnabled: boolean;
    successMessage: string;
    failureMessage: string;
    fromEmailKey?: string;
}