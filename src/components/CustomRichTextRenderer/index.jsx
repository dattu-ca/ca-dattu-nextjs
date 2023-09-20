import PropTypes from 'prop-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, INLINES, MARKS} from '@contentful/rich-text-types';
import {bodyImagesSchema, bodyFormSchema} from "~/contentful/schema";
import {BannerComponent} from "../Banner";
import {FormComponent} from "../FormComponent";


const Bold = ({children}) => <span className="font-bold">{children}</span>;
const Italic = ({children}) => <span className="italic">{children}</span>;
const Underline = ({children}) => <span className="underline">{children}</span>;
const Text = ({children}) => <p>{children}</p>;
const Ol = ({children}) => <ol className="">{children}</ol>;
const Ul = ({children}) => <ul className="">{children}</ul>;
const Li = ({children}) => <li className="">{children}</li>;

const renderEmbeddedEntry = (node, children) => {
    const embeddedType = node.data.target.sys.contentType.sys.id;
    switch (embeddedType) {
        case 'bodyContent': {
            return documentToReactComponents(node.data.target.fields.body, options)
        }
        case 'bodyImages': {
            const bodyImage = bodyImagesSchema.mapContentful(node.data.target);
            console.log('boy', bodyImage)
            if(bodyImage){
                return <BannerComponent banners={[bodyImage]}/>    
            }
            return null;            
        }
        case 'bodyForm': {
            const form = bodyFormSchema.mapContentful(node.data.target);
            return <FormComponent form={form}/>
        }
        default: {
            return <p>[{embeddedType}] not implemented</p>
        }
    }

}

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
        [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
        [INLINES.EMBEDDED_ENTRY]: renderEmbeddedEntry,
    },
    renderText: (text) => <span dangerouslySetInnerHTML={{__html: text.replace(/\n/g, '<br/>')}}/>
};

const CustomRichTexRenderer = ({document} = {document: undefined}) => {
    if (!document) {
        return null;
    }
    return <section>
        {documentToReactComponents(document, options)}
    </section>
}

CustomRichTexRenderer.propTypes = {
    document: PropTypes.object
}

export {
    CustomRichTexRenderer
};