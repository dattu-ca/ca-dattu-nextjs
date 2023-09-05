'use client';
import {useCallback} from "react";
import SlideButton from 'react-slide-button';
import {IBodyForm, TBodyFormField} from "~/models/bodyForm";
import {FieldTypeText} from "./FieldTypeText";
import {FieldTypeTextArea} from "./FieldTypeTextArea";
import clsx from "clsx";

interface IProps {
    formJson: IBodyForm
}

const FormComponent = ({formJson}: IProps) => {
    const getField = useCallback((field: TBodyFormField) => {
        switch (field.fieldType) {
            case 'text':
                return <div>
                    <FieldTypeText field={field}/>
                </div>
            case 'textarea':
                return <FieldTypeTextArea field={field}/>
            default:
                return <pre>{JSON.stringify(field, null, 2)}</pre>
        }
    }, []);

    return <div>
        <form className={clsx('w-full max-w-sm')}>
            <fieldset>
                {
                    formJson.legend && <legend>{formJson.legend}</legend>
                }
                {
                    formJson.fields.map(field => <div key={field.id} className="mb-4">{getField(field)}</div>)
                }
            </fieldset>
            <SlideButton
                classList={clsx('bg-site-tertiary !text-white')}
                mainText="Slide to Submit"
                overlayText="Submitting..."
                onSlideDone={function () {
                    console.log("Done!");
                }}
            />
            
        </form>
    </div>
}

export {
    FormComponent
}