import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES, MARKS} from '@contentful/rich-text-types';


const Bold = ({children}) => <span className="font-bold">{children}</span>;
const Italic = ({children}) => <span className="italic">{children}</span>;
const Underline = ({children}) => <span className="underline">{children}</span>;
    const Text = ({children}) => <p>{children}</p>;
const Ol = ({children}) => <ol className="">{children}</ol>;
const Ul = ({children}) => <ul className="">{children}</ul>;
const Li = ({children}) => <li className="">{children}</li>;


const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
        [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
        [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
        [MARKS.CODE]: (text) => <code>{text}</code>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.OL_LIST]: (node, children) => <Ol>{children}</Ol>,
        [BLOCKS.UL_LIST]: (node, children) => <Ul>{children}</Ul>,
        [BLOCKS.LIST_ITEM]: (node, children) => <Li>{children}</Li>,
        [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            const embeddedType = node.data.target.sys.contentType.sys.id;
            return documentToReactComponents(node.data.target.fields.body, options)
        },
        [INLINES.EMBEDDED_ENTRY]: (node, children) => {
            const embeddedType = node.data.target.sys.contentType.sys.id;
            return documentToReactComponents(node.data.target.fields.body, options)            
        },
    },
    renderText: (text) => <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>')}} />
};

const CustomRichTexRenderer = ({document}) => {
    return <section>
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
        {documentToReactComponents(document, options)}
    </section>
}

export {
    CustomRichTexRenderer
};