import {BodyContent} from "~/models";
import {SanityRichTextRenderer} from "~/sanity/richTextRenderer";


interface IProps {
    data: BodyContent
}

const BodyContentComponent = ({data}: IProps) => {
    if (!data || !data.body) {
        return null;
    }
    if(data.cmsSource === 'Sanity'){
        return <SanityRichTextRenderer document={data.body}/>
    }
    return <p>BodyContentComponent for [{data.cmsSource}] not implemented</p>
    
}

export {
    BodyContentComponent
}