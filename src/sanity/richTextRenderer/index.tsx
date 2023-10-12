import {Renderer} from './renderer';

interface IProps {
    document?: object | undefined;
}

const SanityRichTextRenderer = ({document}: IProps) => {
    if (!document) {
        return null;
    }
    return <Renderer document={document}/>
}
export {
    SanityRichTextRenderer
}