import {FieldInputProps} from "formik";
import clsx from "clsx";


const FieldTypeTextArea = (props: FieldInputProps<string>) => {
    return <textarea className={clsx()} {...props}></textarea>;
}

export {
    FieldTypeTextArea
}