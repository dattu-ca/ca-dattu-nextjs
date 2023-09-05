import {IBodyFormFieldText, TBodyFormField} from "~/models/bodyForm";

interface IProps {
    field: TBodyFormField
}

const FieldTypeText = ({field: propField}: IProps) => {
    const field = propField as IBodyFormFieldText;
    return <div className="daisyui-form-control w-full max-w-xs">
        <input id={`txt${field.id}`}
               name={field.id}
               type={field.inputType || 'text'}
               placeholder={field.label}
               className="daisyui-input daisyui-input-bordered w-full max-w-xs"/>
    </div>
}

export {
    FieldTypeText
}