import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';



const Bold = ({ children }) => <span className="font-bold">{children}</span>;
const Text = ({ children }) => <p>{children}</p>;


const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            return documentToReactComponents(node.data.target.fields.body, options)
        },
    },
    renderText: (text) => text.replace('!', '?'),
};

const CustomRichTexRenderer = ({document}) => {
    return <section>
        {documentToReactComponents(document, options)}
    </section>
}

export {
    CustomRichTexRenderer
};