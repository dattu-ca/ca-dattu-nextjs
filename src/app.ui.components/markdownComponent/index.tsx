import Markdown from 'react-markdown';
import { BodyMarkdown } from "~/models"

interface IProps {
    data: BodyMarkdown
}

const MarkdownComponent = ({ data }: IProps) => {
    return <Markdown>{data.markdown}</Markdown>
}

export {
    MarkdownComponent
}