import clsx from "clsx";
import {FieldInputProps} from "formik";


const FieldTypeTextArea = (props: FieldInputProps<string>) => {
    return <textarea className={clsx()} {...props}></textarea>;
}

export {
    FieldTypeTextArea
}