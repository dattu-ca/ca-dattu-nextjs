'use client';
import {Fragment, useState, useRef} from "react";
import {IBodyForm} from "~/models/bodyForm";
import clsx from "clsx";
import {FormikProps, Form, Formik} from 'formik';
import {ReactIcon} from "~/components/ReactIcon";
import {formsServices} from '~/services'
import {useForm} from "~/components/FormComponent/useForm";
import ReCAPTCHA from "react-google-recaptcha";
import {CLIENT_CONFIG} from "~/utils/config.client";
import {toast} from "react-toastify";
import {sanitize} from "~/utils/utils";


interface IProps {
    form: IBodyForm;
}

const FormComponent = ({form}: IProps) => {
    const {formJson, formId} = form;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        initialValue,
        getField
    } = useForm(formJson);

    const recaptchaRef = useRef<ReCAPTCHA | null>(null)
    const [recaptchaToken, setRecaptchaToken] = useState<string>(form.recaptchaEnabled ? '' : 'NOT_ENABLED');

    async function handleCaptchaSubmission(token: string | null) {
        if (token) {
            setRecaptchaToken(token);
        }
    }


    return <div>
        <Formik initialValues={initialValue}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={async (values, actions) => {
                    if (!isSubmitting && recaptchaToken) {
                        setIsSubmitting(true);
                        actions.setSubmitting(true);
                        try {

                            for (const k of Object.keys(values)) {
                                values[k] = sanitize`${values[k]}`;
                            }
                            if(form.submitFormEnabled) {
                                await formsServices.saveForm({
                                    recaptchaToken,
                                    formId: form.formId,
                                    formValues: values,
                                });
                                actions.resetForm();
                                recaptchaRef.current?.reset();
                                setRecaptchaToken(form.recaptchaEnabled ? '' : 'NOT_ENABLED');
                                toast(form.successMessage, {
                                    type: 'success'
                                });
                            }    
                            
                        } catch (e) {
                            toast(form.failureMessage, {
                                type: 'error'
                            })
                        } finally {
                            setIsSubmitting(false);
                            actions.setSubmitting(false);
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
                                                        className='flex items-center gap-2 mb-0'
                                                        key={`${f.id}_${error}`}>
                                                        <ReactIcon icon={'FiAlertCircle'}
                                                                   className={' w-6 h-6'}/>
                                                        <span>{error}</span>
                                                    </p>)
                                                }
                                            </div>
                                            <div>
                                                {
                                                    <p className={clsx('mb-0')}>
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
                            <div className={clsx('mb-4')}>
                                {
                                    form.recaptchaEnabled
                                    && <ReCAPTCHA
                                        sitekey={CLIENT_CONFIG.GOOGLE_RECAPTCHA.SITE_KEY}
                                        ref={recaptchaRef}
                                        onChange={handleCaptchaSubmission}
                                    />
                                }
                                {
                                    submitCount > 0 && !recaptchaToken
                                    && (
                                        <p
                                            className='flex items-center gap-2 text-red-500'>
                                            <ReactIcon icon={'FiAlertCircle'}
                                                       className={' w-6 h-6'}/>
                                            <span>Recaptcha required!</span>
                                        </p>
                                    )
                                }
                            </div>
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