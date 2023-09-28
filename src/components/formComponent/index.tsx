import clsx from "clsx";
import {BodyForm} from "~/models/bodyForm";
import {formsServices} from "~/services";
import {FormikComponent} from "../formComponent/formikComponent";



interface IProps {
    form: BodyForm;
    onSubmit?: (values: Record<string, any>) => Promise<boolean>
}


const FormComponent = ({form, onSubmit}: IProps) => {

    const onSubmitHandler = (recaptchaToken: string, values: Record<string, any>) => {
        if (onSubmit) {
            return onSubmit(values);
        } else {
            return formsServices.saveForm({
                recaptchaToken,
                formId: form.formId,
                formValues: values,
            });
        }
    }


    return <div
        className={clsx()}
        style={{maxWidth: `${form.maxWidth ? form.maxWidth + 'px' : 'auto'}`}}>
        <div className={clsx()}>
            <FormikComponent form={form} onSubmit={onSubmitHandler}/>
        </div>
    </div>
}

export {
    FormComponent
}