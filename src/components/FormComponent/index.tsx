'use client';
import {Fragment, useState} from "react";
import {IBodyForm, TBodyFormField} from "~/models/bodyForm";
import clsx from "clsx";
import {FormikProps, Form, Formik} from 'formik';
import {ReactIcon} from "~/components/ReactIcon";
import {doFormSubmission} from '~/services'
import {useForm} from "~/components/FormComponent/useForm";
import {initial} from "lodash";


interface IProps {
    formId: string;
    formJson: IBodyForm
}

const FormComponent = ({formId, formJson}: IProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        initialValue,
        getField
    } = useForm(formJson)


    return <div>
        <Formik initialValues={initialValue}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={async (values, actions) => {
                    if (!isSubmitting) {
                        setIsSubmitting(true);
                        actions.setSubmitting(false);
                        try {
                            const result = await doFormSubmission(formId, formJson, values);
                            console.log(result);
                            actions.resetForm();
                        } catch (e) {
                        } finally {
                            setIsSubmitting(false);
                        }
                    }
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
                                    <legend className={clsx(
                                        'mb-4 font-bold text-gray-700 text-lg'
                                    )}>{formJson.legend}</legend>
                                }
                                {
                                    formJson.fields.map(f => <div key={f.id} className='mb-4'>
                                        <div>{getField(f)}</div>
                                        <div className={clsx(
                                            'flex justify-between gap-2 ',
                                            'text-sm mt-2'
                                        )}>
                                            <div className={clsx('text-red-500')}>
                                                {
                                                    getShowErrorFlag(f.id) &&
                                                    (errors[f.id] as string[]).map(error => <p
                                                        className='flex items-center gap-2'
                                                        key={`${f.id}_${error}`}>
                                                        <ReactIcon icon={'FiAlertCircle'}
                                                                   className={' w-6 h-6'}/>
                                                        <span>{error}</span>
                                                    </p>)
                                                }
                                            </div>
                                            <div>
                                                {
                                                    <p>
                                                            <span className={clsx(
                                                                {
                                                                    ['text-red-500']: (errors[f.id] as string[])?.find(error => error.toLowerCase().includes('max length'))
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
                            <button type="submit"
                                    disabled={isSubmitting}
                                    className={clsx(
                                        'w-full',
                                        'daisyui-btn daisyui-btn-primary',
                                        ' bg-site-primary hover:bg-site-tertiary text-white '
                                    )}>
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