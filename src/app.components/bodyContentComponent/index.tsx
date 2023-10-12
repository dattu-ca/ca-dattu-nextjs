import {BodyContent} from "~/models";
import {RichTextRenderer} from "~/contentful/richTextRenderer";


interface IProps {
    data: BodyContent
}

const BodyContentComponent = ({data}: IProps) => {
    if (!data || !data.body) {
        return null;
    }
    if(data.cmsSource === 'Contentful'){
        return <RichTextRenderer document={data.body}/>
    }
    return <p>BodyContentComponent for [{data.cmsSource}] not implemented</p>
    
}

export {
    BodyContentComponent
}