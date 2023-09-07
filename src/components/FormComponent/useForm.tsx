import {useCallback, useMemo} from "react";
import {doValidation} from "~/services";
import {IBodyForm, IBodyFormFieldText, IBodyFormFieldTextArea, TBodyFormField} from "~/models/bodyForm";
import {Field} from "formik";
import {FieldTypeText} from "~/components/FormComponent/FieldTypeText";
import {FieldTypeTextArea} from "~/components/FormComponent/FieldTypeTextArea";

export const useForm = (formJson: IBodyForm) => {
    const validate = useCallback((id: string, value: string) => doValidation(formJson, id, value), [formJson]);

    const getField = useCallback((field: TBodyFormField) => {
        switch (field.fieldType) {
            case 'text':
                const text = field as IBodyFormFieldText;
                return <Field as={FieldTypeText}
                              type={text.inputType}
                              name={text.id}
                              placeholder={text.label}
                              validate={(value: string) => validate(field.id, value)}
                />;
            case 'textarea':
                const textarea = field as IBodyFormFieldTextArea;
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
        return formJson.fields.reduce((prev, curr) => {
            return {
                ...prev,
                [curr.id]: '',
            }
        }, {});
    }, [formJson])


    return {
        initialValue,
        getField
    }
}