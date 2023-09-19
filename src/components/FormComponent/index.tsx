import {IBodyForm} from "~/models/bodyForm";
import {formsServices} from "~/services";
import {FormikComponent} from "~/components/FormComponent/FormikComponent";


interface IProps {
    form: IBodyForm;
    onSubmit?: (values: Record<string, any>) => Promise<boolean>
}


const FormComponent = ({form, onSubmit}: IProps) => {
    
    const onSubmitHandler = (recaptchaToken: string, values: Record<string, any>) => {
        if(onSubmit) {
            return onSubmit(values);
        }
        else {
            return formsServices.saveForm({
                recaptchaToken,
                formId: form.formId,
                formValues: values,
            });
        }
    }


    return <FormikComponent form={form} onSubmit={onSubmitHandler} />
}

export {
    FormComponent
}