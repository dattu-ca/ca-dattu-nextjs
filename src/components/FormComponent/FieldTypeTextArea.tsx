import {IBodyFormFieldTextArea, TBodyFormField} from "~/models/bodyForm";

interface IProps {
    field: TBodyFormField
}

const FieldTypeTextArea = ({field: propField}: IProps) => {
    const field = propField as IBodyFormFieldTextArea;
    return <div className="daisyui-form-control w-full">
        <textarea id={`txt${field.id}`}
                  name={field.id}
                  placeholder={field.label}
                  className="daisyui-textarea daisyui-textarea-bordered h-24"></textarea>
    </div>
}

export {
    FieldTypeTextArea
}