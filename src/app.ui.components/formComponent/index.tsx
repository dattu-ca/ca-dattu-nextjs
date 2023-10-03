import {useCallback, Fragment, useRef, useState} from "react";
import clsx from "clsx";
import {useForm, SubmitHandler} from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import {BodyFormFieldText, BodyFormFieldTextArea, BodyFormFieldType, BodyFormModel} from "~/models";
import {CLIENT_CONFIG} from "~/utils/config.client";
import {isEmailValid} from "~/utils/form.utils";


interface IProps {
    formModel: BodyFormModel[];
    recaptchaEnabled: boolean;
    isSubmitting: boolean;
    onSubmit: (values: Record<string, any>, recaptchaToken: string | null) => Promise<any>;
}

const FormComponent = ({formModel, recaptchaEnabled, isSubmitting, onSubmit}: IProps) => {
    const {
        register,
        handleSubmit,
        formState,
        reset,
    } = useForm();
    const {errors} = formState;

    const recaptchaRef = useRef<ReCAPTCHA | null>(null)
    const [recaptchaToken, setRecaptchaToken] = useState<string>(recaptchaEnabled ? '' : 'NOT_ENABLED');

    async function handleCaptchaSubmission(token: string | null) {
        if (token) {
            setRecaptchaToken(token);
        }
    }

    const onSubmitHandler: SubmitHandler<any> = (data) => {
        if (recaptchaEnabled && !recaptchaToken) {
            return;
        }
        onSubmit(data, recaptchaToken).then(() => {
            reset();
        });
    }


    const renderError = useCallback((field: BodyFormFieldType) => {
        const error = errors[field.id];
        let message: string | undefined = undefined;
        if (error) {
            if (error.type === 'required') {
                message = 'This field is required'
            } else if (error.type === 'maxLength') {
                message = `The maximum length allowed is ${field.validations.maxLength}`
            } else if (error.type === 'validate') {
                message = error.message as string;
            }
            if (message) {
                return <div className={clsx('mt-2 text-red-500')}><span>{message}</span></div>
            }
        }
        return null;
    }, [errors]);


    const renderField_text = useCallback((f: BodyFormFieldType) => {
        const field = f as BodyFormFieldText;
        return (
            <Fragment>
                <label htmlFor={field.id}
                       className={clsx(
                           "daisyui-label",
                       )}>
                            <span className={clsx(
                                {
                                    ['field-required']: field.validations.isRequired
                                }
                            )}>
                                {field.label}
                            </span>
                </label>
                <input type={field.inputType}
                       id={field.id}
                       {...register(field.id, {
                           required: Boolean(field.validations.isRequired),
                           maxLength: field.validations.maxLength || Number.MAX_SAFE_INTEGER,
                           validate: (value) => {
                               if (field.inputType === 'email') {
                                   if (!isEmailValid(value)) {
                                       return 'Please enter a valid email';
                                   }
                               }
                               return true;
                           }
                       })}
                       disabled={isSubmitting}
                       className={clsx(
                           'daisyui-input daisyui-input-bordered',
                       )}/>
                {renderError(field)}
            </Fragment>
        )
    }, [renderError, register, isSubmitting]);


    const renderField_textarea = useCallback((f: BodyFormFieldType) => {
        const field = f as BodyFormFieldTextArea;
        return (
            <Fragment>
                <label htmlFor={field.id}
                       className={clsx(
                           "daisyui-label",
                       )}>
                            <span className={clsx(
                                {
                                    ['field-required']: field.validations.isRequired
                                }
                            )}>
                                {field.label}
                            </span>
                </label>
                <textarea id={field.id}
                          {...register(field.id, {
                              required: Boolean(field.validations.isRequired),
                              maxLength: field.validations.maxLength || Number.MAX_SAFE_INTEGER
                          })}
                          disabled={isSubmitting}
                          rows={8}
                          className={clsx(
                              'daisyui-textarea daisyui-textarea-bordered',
                          )}/>
                {renderError(field)}
            </Fragment>
        )
    }, [renderError, register, isSubmitting]);


    const renderField = useCallback((f: BodyFormFieldType) => {
        switch (f.fieldType) {
            case 'text':
                return renderField_text(f)
            case 'textarea' :
                return renderField_textarea(f);
            default:
                return <p>Need to implement {f.fieldType}</p>
        }
    }, [renderField_text, renderField_textarea]);


    return <div>
        <form onSubmit={handleSubmit(onSubmitHandler)} noValidate={true}>
            {
                formModel.map(model => {
                    return (
                        <Fragment key={model.legend}>
                            <fieldset>
                                <legend className={clsx(
                                    'text-xl',
                                    'mb-2'
                                )}>{model.legend}</legend>
                                <div className={clsx(
                                    'mb-4 md:mb-8'
                                )}>
                                    {
                                        model.fields.map(f => {

                                            return <Fragment key={f.id}>
                                                <div className={clsx(
                                                    'daisyui-form-control',
                                                    'mb-4',
                                                )}>
                                                    {
                                                        renderField(f)
                                                    }
                                                </div>
                                            </Fragment>
                                        })
                                    }
                                </div>
                            </fieldset>
                        </Fragment>
                    )
                })
            }
            {
                recaptchaEnabled
                && (
                    <fieldset>
                        <div className={clsx('mb-4 md:mb-8')}>
                            <ReCAPTCHA
                                sitekey={CLIENT_CONFIG.GOOGLE_RECAPTCHA.SITE_KEY}
                                ref={recaptchaRef}
                                onChange={handleCaptchaSubmission}
                            />
                            {
                                formState.submitCount > 0 && !recaptchaToken &&
                                <div className={clsx('mt-2 text-red-500')}><span>reCAPTCHA is required</span></div>
                            }
                        </div>
                    </fieldset>
                )
            }

            <input type="submit"
                   value='Submit'
                   disabled={isSubmitting}
                   className={clsx(
                       'daisyui-btn daisyui-btn-outline'
                   )}/>
        </form>
    </div>
}


export {
    FormComponent
}