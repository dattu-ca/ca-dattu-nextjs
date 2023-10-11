import {useEffect, useState} from "react";
import {isEqual} from 'lodash'
import {set} from "sanity";
import {VanillaJSONEditor} from "./JSONEditor/";


export function BodyFormJSONEditorControl(props) {
    const {value, onChange} = props;

    const [data, setData] = useState({
        json: value ? JSON.parse(value) : [],
        text: undefined
    });


    function handleChange(updatedContent) {
        setData(updatedContent);
        const param = set(updatedContent.text);
        onChange(param);
    }


    return <div>
        <VanillaJSONEditor
            content={data}
            readOnly={false}
            onChange={handleChange}
        />
    </div>
}