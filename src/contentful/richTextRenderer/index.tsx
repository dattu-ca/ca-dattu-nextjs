import {Renderer} from './renderer';

interface IProps {
    document?: object | undefined;
}

const RichTextRenderer = ({document}: IProps) => {
    if (!document) {
        return null;
    }
    return <Renderer documenet={document}/>
}
export {
    RichTextRenderer
}