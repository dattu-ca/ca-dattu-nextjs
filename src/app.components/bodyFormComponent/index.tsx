'use client';
import {useState} from "react";
import {BodyForm} from "~/models";
import {FormComponent} from "~/app.ui.components/formComponent";

interface IProps {
    data: BodyForm;
}

const BodyFormComponent = ({data}: IProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmitHandler = () => {
        console.log('submitting')
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