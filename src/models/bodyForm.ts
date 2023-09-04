interface IBodyForm {
    fieldType: string;
    inputType?: string;
    label?: string;
    validations: {
        isRequired: boolean;
        maxLength?: number;
    }
}

export {IBodyForm}