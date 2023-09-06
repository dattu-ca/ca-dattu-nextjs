
import {FieldInputProps} from "formik";


const FieldTypeText = (props: FieldInputProps<string>) => {
    return <input className="daisyui-input daisyui-input-bordered w-full" {...props} />
}

export {
    FieldTypeText
}