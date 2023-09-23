import {IBodyForm} from "~/models/bodyForm";
import {formsServices} from "~/services";
import {FormikComponent} from "~/components/FormComponent/FormikComponent";
import clsx from "clsx";


interface IProps {
    form: IBodyForm;
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
        className={
            clsx(
                'w-full text-gray-500 border border-2 border-gray-300 rounded-lg p-4 bg-white',
                'mx-auto'
            )
        }
        style={{maxWidth: `${form.maxWidth ? form.maxWidth + 'px' : 'auto'}`}}>
        <FormikComponent form={form} onSubmit={onSubmitHandler}/>
    </div>
}

export {
    FormComponent
}