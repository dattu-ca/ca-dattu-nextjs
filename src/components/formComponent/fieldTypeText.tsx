import clsx from "clsx";
import {FieldInputProps} from "formik";


const FieldTypeText = (props: FieldInputProps<string>) => {
    return <input className={clsx()} {...props} />
}

export {
    FieldTypeText
}