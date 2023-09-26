export interface IBodyFormFieldValidations {
    isRequired: boolean;
    maxLength?: number;
}

export interface IBodyFormField {
    contentType: 'BodyFormField' | 'BodyFormFieldText' | 'BodyFormFieldTextArea';
    id: string;
    fieldType: string;
    label?: string;
    validations: Partial<IBodyFormFieldValidations>
}

export interface IBodyFormFieldText extends IBodyFormField {
    contentType: 'BodyFormFieldText';
    inputType?: string;
    defaultValue?: string;
}

export interface IBodyFormFieldTextArea extends IBodyFormField {
    contentType: 'BodyFormFieldTextArea';
    defaultValue?: string;
}

export type TBodyFormField = IBodyFormField | IBodyFormFieldText | IBodyFormFieldTextArea;

export interface IBodyFormModel {
    contentType: 'BodyFormModel';
    legend?: string;
    fields: TBodyFormField[];
}

export interface IBodyForm {
    contentType: 'BodyForm';
    formId: string;
    maxWidth?: number;
    formModel: IBodyFormModel[];
    recaptchaEnabled: boolean;
    submitFormEnabled: boolean;
    sendEmailEnabled: boolean;
    successMessage: string;
    failureMessage: string;
    fromEmailKey?: string;
}