import { useEffect, useState, Suspense } from "react";
import { set } from "sanity";
import { VanillaJSONEditor } from "./JSONEditor";


export function BodyFormJSONEditorControl(props) {
    const { value, onChange } = props;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const [data, setData] = useState({
        json: value ? JSON.parse(value) : [],
        text: undefined
    });

    if (typeof window === 'undefined') {
        return null;
    }


    function handleChange(updatedContent) {
        setData(updatedContent);
        const param = set(updatedContent.text);
        onChange(param);
    }

    if (!mounted) {
        return null;
    }


    return <div>
        <Suspense >
            <VanillaJSONEditor
                content={data}
                readOnly={false}
                onChange={handleChange}
            />
        </Suspense>
    </div>
}