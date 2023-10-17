import { BodyMarkdown} from "~/models";
import { MarkdownComponent } from "~/app.ui.components/markdownComponent";


interface IProps {
    data: BodyMarkdown
}

const BodyMarkdownComponent = ({data}: IProps) => {
    if (!data || !data.markdown) {
        return null;
    }
    return <MarkdownComponent data={data} />
    
}

export {
    BodyMarkdownComponent
}