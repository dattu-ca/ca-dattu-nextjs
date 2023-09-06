'use client';
import {Fragment, useCallback} from "react";
import {IBodyForm, IBodyFormField, IBodyFormFieldText, IBodyFormFieldTextArea, TBodyFormField} from "~/models/bodyForm";
import {FieldTypeText} from "./FieldTypeText";
import {FieldTypeTextArea} from "./FieldTypeTextArea";
import clsx from "clsx";
import {FormikProps, Form, Field, Formik} from 'formik';
import {ReactIcon} from "~/components/ReactIcon";
import ReCAPTCHA from "react-google-recaptcha";



const SITE_KEY = '6LfnVgUoAAAAABYNGcaOt3pTO_vhE5UuW9kXMhe7';
const SECRET_KEY = '6LfnVgUoAAAAAI1art43-fewyBw6W3pC7D6Bk9_x';

interface IProps {
    formJson: IBodyForm
}

const getInitialValue = (fields: TBodyFormField[]) => {
    return fields.reduce((prev, curr) => {
        return {
            ...prev,
            [curr.id]: '',
        }
    }, {});
}


const isEmailValid = (val: string) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(val);
}


const FormComponent = ({formJson}: IProps) => {

    function onChange(token: string | null) {
        console.log("Captcha value:", token);
    }

    const doValidation = useCallback((id: string, value: string) => {
        let error = [];
        const field = formJson.fields.find(f => f.id === id);
        if (field) {
            const validations = field.validations || {};
            if (validations.isRequired === true && !value) {
                error.push('Is Required');
            } else if ("inputType" in field && field.inputType === 'email' && !isEmailValid(value)) {
                error.push('Invalid email format');
            } else if (validations.maxLength && Number.isInteger(+(validations.maxLength)) && value.length > validations.maxLength) {
                error.push(`Exceeded allowed maxlength of ${validations.maxLength}`);
            }
        }

        return error.length > 0 ? error : undefined;
    }, [formJson.fields]);

    const getField = useCallback((field: TBodyFormField) => {
        switch (field.fieldType) {
            case 'text':
                const text = field as IBodyFormFieldText;
                return <Field as={FieldTypeText}
                              type={text.inputType}
                              name={text.id}
                              placeholder={text.label}
                              validate={(value: string) => doValidation(field.id, value)}
                />;
            case 'textarea':
                const textarea = field as IBodyFormFieldTextArea;
                return <Field as={FieldTypeTextArea}
                              name={textarea.id}
                              placeholder={textarea.label}
                              validate={(value: string) => doValidation(field.id, value)}
                />;
            default:
                return <pre>{JSON.stringify(field, null, 2)}</pre>
        }
    }, [doValidation]);

    return <div>
        <Formik initialValues={getInitialValue(formJson.fields)}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values, actions) => {
                    console.log(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}>
            {
                ({values, errors, touched, submitCount}: FormikProps<any>) => {
                    const getShowErrorFlag = (id: string) => errors[id] && (touched[id] || submitCount > 0);
                    return (
                        <Form
                            className={clsx('w-full text-gray-500 border border-2 border-gray-300 rounded-lg p-4 bg-white')}
                            noValidate={true}>
                            <fieldset>
                                {
                                    formJson.legend &&
                                    <legend className='mb-4 font-bold text-gray-700 text-lg'>{formJson.legend}</legend>
                                }
                                {
                                    formJson.fields.map(f => <div key={f.id} className='mb-4'>
                                        <div>{getField(f)}</div>
                                        <div className='text-sm flex justify-between gap-2 mt-2'>
                                            <div>
                                                {
                                                    getShowErrorFlag(f.id) &&
                                                    (errors[f.id] as string[]).map(error => <div className='flex gap-2'
                                                                                                 key={`${f.id}_${error}`}>
                                                        <ReactIcon icon={'FiAlertCircle'}
                                                                   className={'text-red-500 w-6 h-6'}/>
                                                        <p className={'text-red-500'}>{error}</p>
                                                    </div>)
                                                }
                                            </div>
                                            <div>
                                                {
                                                    <p>
                                                            <span className={clsx(
                                                                {
                                                                    ['text-red-500']: (errors[f.id] as string[])?.find(error => error.includes('maxLength'))
                                                                }
                                                            )}>{values[f.id].length}</span>
                                                        {
                                                            f.validations.maxLength
                                                            && <Fragment>
                                                                <span>/</span>
                                                                <span>{f.validations.maxLength}</span>
                                                            </Fragment>
                                                        }
                                                    </p>
                                                }
                                            </div>
                                        </div>

                                    </div>)
                                }
                            </fieldset>
                            <ReCAPTCHA
                                sitekey={SITE_KEY}
                                onChange={onChange}
                            />
                            <button type="submit"
                                    className='daisyui-btn daisyui-btn-primary bg-site-primary hover:bg-site-tertiary text-white w-full'>
                                Submit
                            </button>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
}

export {
    FormComponent
}