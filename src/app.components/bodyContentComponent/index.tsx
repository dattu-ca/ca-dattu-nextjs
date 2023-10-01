import {BodyContent} from "~/models";
import {RichTextRenderer} from "~/contentful/richTextRenderer";


interface IProps {
    data: BodyContent
}

const BodyContentComponent = ({data}: IProps) => {
    if (!data || !data.body) {
        return null;
    }
    return <RichTextRenderer document={data.body}/>
}

export {
    BodyContentComponent
}