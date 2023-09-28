import {useCallback, useMemo} from "react";
import {Field} from "formik";
import {flattenFields, doValidation} from "~/utils/form.utils";
import {BodyForm, BodyFormFieldText, BodyFormFieldTextArea, BodyFormFieldType} from "~/models";
import {FieldTypeText} from "./fieldTypeText";
import {FieldTypeTextArea} from "./fieldTypeTextArea";


export const useForm = (form: BodyForm) => {
    const flatFormFields = flattenFields(form);

    const validate = useCallback((id: string, value: string) =>
        doValidation(form, id, value), [form]);

    const getField = useCallback((field: BodyFormFieldType) => {
        switch (field.fieldType) {
            case 'text':
                const text = field as BodyFormFieldText;
                return <Field as={FieldTypeText}
                              type={text.inputType}
                              name={text.id}
                              placeholder={text.label}
                              validate={(value: string) => validate(field.id, value)}
                />;
            case 'textarea':
                const textarea = field as BodyFormFieldTextArea;
                return <Field as={FieldTypeTextArea}
                              name={textarea.id}
                              placeholder={textarea.label}
                              validate={(value: string) => validate(field.id, value)}
                />;
            default:
                return <pre>{JSON.stringify(field, null, 2)}</pre>
        }
    }, [validate]);


    const initialValue = useMemo(() => {
        return flatFormFields.reduce((prev, curr) => {
            return {
                ...prev,
                [curr.id]: '',
            }
        }, {});
    }, [flatFormFields])


    return {
        initialValue,
        getField
    }
}