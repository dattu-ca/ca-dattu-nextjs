
import {FieldInputProps} from "formik";
import clsx from "clsx";


const FieldTypeText = (props: FieldInputProps<string>) => {
    return <input className={clsx()} {...props} />
}

export {
    FieldTypeText
}