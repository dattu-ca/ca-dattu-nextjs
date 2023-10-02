import {useCallback, Fragment} from "react";
import clsx from "clsx";
import {useForm, SubmitHandler} from "react-hook-form"
import {BodyFormFieldText, BodyFormFieldTextArea, BodyFormFieldType, BodyFormModel} from "~/models";


interface IProps {
    formModel: BodyFormModel[];
    recaptchaEnabled: boolean;
    isSubmitting: boolean;
    onSubmit: () => void;
}

const FormComponent = ({formModel, recaptchaEnabled, isSubmitting, onSubmit}: IProps) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const onSubmitHandler: SubmitHandler<any> = (data) => {
        console.log(data)
        // onSubmit(data);
    }


    const renderError = useCallback((field: BodyFormFieldType) => {
        console.log(errors);
        const error = errors[field.id];
        let message;
        if (error) {
            if (error.type === 'required') {
                message = 'This field is required'
            } else if (error.type === 'maxLength') {
                message = `The maximum length allowed is ${field.validations.maxLength}`
            }
        }
        if (message) {
            return <div className={clsx('mt-2 text-red-500')}><span>{message}</span></div>
        }
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
                           maxLength: field.validations.maxLength || Number.MAX_SAFE_INTEGER
                       })}
                       className={clsx(
                           'daisyui-input daisyui-input-bordered',
                       )}/>
                {renderError(field)}
            </Fragment>
        )
    }, [renderError, register]);


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
                          rows={8}
                          className={clsx(
                              'daisyui-textarea daisyui-textarea-bordered',
                          )}/>
                {renderError(field)}
            </Fragment>
        )
    }, [renderError, register]);


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
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            {errors.exampleRequired && <span>This field is required</span>}
            {
                formModel.map(model => {
                    return <Fragment key={model.legend}>
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
                })
            }


            <input type="submit" value='Submit' className={clsx(
                'daisyui-btn daisyui-btn-outline'
            )}/>
        </form>
    </div>
}


export {
    FormComponent
}