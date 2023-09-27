export interface BodyFormFieldValidations {
    isRequired: boolean;
    maxLength?: number | undefined;
}

export interface BodyFormField {
    contentType: 'BodyFormField' | 'BodyFormFieldText' | 'BodyFormFieldTextArea';
    id: string;
    fieldType: string;
    label?: string | undefined;
    validations: Partial<BodyFormFieldValidations>
}

export interface BodyFormFieldText extends BodyFormField {
    contentType: 'BodyFormFieldText';
    inputType?: string | undefined;
    defaultValue?: string | undefined;
}

export interface BodyFormFieldTextArea extends BodyFormField {
    contentType: 'BodyFormFieldTextArea';
    defaultValue?: string | undefined;
}

export type BodyFormFieldType = BodyFormField | BodyFormFieldText | BodyFormFieldTextArea;

export interface BodyFormModel {
    contentType: 'BodyFormModel';
    legend?: string | undefined;
    fields: BodyFormFieldType[];
}

export interface BodyForm {
    sysId?: string | undefined;
    contentType: 'BodyForm';
    formId: string;
    maxWidth?: number | undefined;
    formModel: BodyFormModel[];
    recaptchaEnabled: boolean;
    submitFormEnabled: boolean;
    sendEmailEnabled: boolean;
    successMessage: string;
    failureMessage: string;
    fromEmailKey?: string | undefined;
}