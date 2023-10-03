'use client';
import {useState} from "react";
import {toast} from "react-toastify";
import {formsServices} from "~/services";
import {BodyForm} from "~/models";
import {FormComponent} from "~/app.ui.components/formComponent";

interface IProps {
    data: BodyForm;
}

const BodyFormComponent = ({data}: IProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmitHandler = (values: Record<string, any>, recaptchaToken: string | null) => {
        setIsSubmitting(true);
        return formsServices
            .saveForm({
                recaptchaToken,
                formId: data.formId,
                formValues: values,
            })
            .then(() => {
                toast(data.successMessage, {
                    type: 'success'
                });
            })
            .catch(e => {
                toast(data.failureMessage, {
                    type: 'error'
                })
            })
            .finally(() => setIsSubmitting(false));
    }

    return <div>
        <FormComponent formModel={data.formModel}
                       isSubmitting={isSubmitting}
                       recaptchaEnabled={data.recaptchaEnabled}
                       onSubmit={onSubmitHandler}
        />
    </div>
}

export {
    BodyFormComponent
}