import {BodyCode} from "~/models";
import { HighlightedCodeComponent } from "~/app.ui.components/highlightedCodeComponent";


interface IProps {
    data: BodyCode
}

const BodyCodeComponent = ({data}: IProps) => {
    if (!data || !data.code) {
        return null;
    }
    return <HighlightedCodeComponent data={data} />
    
}

export {
    BodyCodeComponent
}