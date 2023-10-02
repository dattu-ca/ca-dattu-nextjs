import {BodyFormModel} from "~/models";

interface IProps {
    formModel: BodyFormModel[];
    recaptchaEnabled: boolean;
    isSubmitting: boolean;
    onSubmit: () => void;
}

const FormComponent = ({formModel, recaptchaEnabled, isSubmitting, onSubmit}: IProps) => {
    return <div>
        <pre>{JSON.stringify(formModel, null, 2)}</pre>
    </div>
}


export {
    FormComponent
}