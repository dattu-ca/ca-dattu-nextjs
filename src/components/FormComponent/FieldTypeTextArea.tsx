import {FieldInputProps} from "formik";


const FieldTypeTextArea = (props: FieldInputProps<string>) => {
    return <textarea className="daisyui-textarea daisyui-textarea-bordered w-full h-48" {...props}></textarea>;
}

export {
    FieldTypeTextArea
}