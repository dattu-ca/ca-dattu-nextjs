import Markdown from 'react-markdown';
import {BodyMarkdown} from "~/models"

interface IProps {
    data: BodyMarkdown
}

const MarkdownComponent = ({data}: IProps) => {
    return <div data-testid='markdown-component'><Markdown>{data.markdown}</Markdown></div>
}

export {
    MarkdownComponent
}