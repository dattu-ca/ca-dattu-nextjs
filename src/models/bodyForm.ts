export interface BodyFormFieldValidations {
    isRequired: boolean;
    maxLength?: number;
}

export interface BodyFormField {
    contentType: 'BodyFormField' | 'BodyFormFieldText' | 'BodyFormFieldTextArea';
    id: string;
    fieldType: string;
    label?: string;
    validations: Partial<BodyFormFieldValidations>
}

export interface BodyFormFieldText extends BodyFormField {
    contentType: 'BodyFormFieldText';
    inputType?: string;
    defaultValue?: string;
}

export interface BodyFormFieldTextArea extends BodyFormField {
    contentType: 'BodyFormFieldTextArea';
    defaultValue?: string;
}

export type BodyFormFieldType = BodyFormField | BodyFormFieldText | BodyFormFieldTextArea;

export interface BodyFormModel {
    contentType: 'BodyFormModel';
    legend?: string;
    fields: BodyFormFieldType[];
}

export interface BodyForm {
    sysId?: string | undefined;
    contentType: 'BodyForm';
    formId: string;
    maxWidth?: number;
    formModel: BodyFormModel[];
    recaptchaEnabled: boolean;
    submitFormEnabled: boolean;
    sendEmailEnabled: boolean;
    successMessage: string;
    failureMessage: string;
    fromEmailKey?: string;
}