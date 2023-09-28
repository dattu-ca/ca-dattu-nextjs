'use client';
import {Fragment, useState, useRef} from "react";
import {FormikProps, Form, Formik} from 'formik';
import clsx from "clsx";
import ReCAPTCHA from "react-google-recaptcha";
import {toast} from "react-toastify";
import {BodyForm} from "~/models/bodyForm";
import {useForm} from "~/components/FormComponent/useForm";
import {CLIENT_CONFIG} from "~/utils/config.client";
import {sanitize} from "~/utils/utils";
import {FiAlertCircle} from "react-icons/fi";


interface IProps {
    form: BodyForm;
    onSubmit: (recaptchaToken: string, values: Record<string, any>) => Promise<any>
}


const FormikComponent = ({form, onSubmit}: IProps) => {
    const {formModel} = form;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        initialValue,
        getField
    } = useForm(form);

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
                onSubmit={async (values: Record<string, any>, actions) => {
                    if (!isSubmitting && ( (recaptchaToken && form.recaptchaEnabled) || !form.recaptchaEnabled   )) {
                        setIsSubmitting(true);
                        actions.setSubmitting(true);
                        try {
                            for (const k of Object.keys(values)) {
                                if (typeof values[k] === 'string') {
                                    values[k] = sanitize`${values[k] as string}`;
                                }
                            }
                            if (form.submitFormEnabled) {
                                await onSubmit(recaptchaToken, values);
                            }
                            actions.resetForm();
                            recaptchaRef.current?.reset();
                            setRecaptchaToken(form.recaptchaEnabled ? '' : 'NOT_ENABLED');
                            toast(form.successMessage, {
                                type: 'success'
                            });

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
                            noValidate={true}>
                            {
                                formModel.map((model, index) => <fieldset key={index}>
                                    {
                                        model.legend &&
                                        <legend className={clsx()}>{model.legend}</legend>
                                    }
                                    {
                                        model.fields.map(f => <div key={f.id} className={clsx()}>
                                            <div>{getField(f)}</div>
                                            <div className={clsx()}>
                                                <div className={clsx()}>
                                                    {
                                                        getShowErrorFlag(f.id) &&
                                                        (errors[f.id] as string[]).map(error => <p
                                                            className={clsx()}
                                                            key={`${f.id}_${error}`}>
                                                            <FiAlertCircle className={clsx()}/> 
                                                            <span>{error}</span>
                                                        </p>)
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                        <p className={clsx()}>
                                                            <span className={clsx()}>{values[f.id].length}</span>
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
                                </fieldset>)
                            }

                            <div className={clsx()}>
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
                                            className={clsx()}>
                                            <FiAlertCircle className={clsx()}/>
                                            <span>Recaptcha required!</span>
                                        </p>
                                    )
                                }
                            </div>
                            <button type="submit"
                                    disabled={isSubmitting}
                                    className={clsx()}>
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
    FormikComponent
}