import { Fragment } from "react";
import clsx from "clsx";
import PropTypes from 'prop-types';
import Link from 'next/link';

import { PortableText } from '@portabletext/react';
import { BodyImage, BodyCode, BodyMarkdown } from '~/models';
import { ImageComponent } from "~/app.ui.components/imageComponent";
import { HighlightedCodeComponent } from "~/app.ui.components/highlightedCodeComponent";
import { MarkdownComponent } from "~/app.ui.components/markdownComponent";


const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            const bodyImage: BodyImage = {
                align: 'center',
                contentType: "BodyImage",
                sysId: value._key,
                maxWidth: undefined,
                maxHeight: undefined,
                border: true,
                shadow: true,
                desktopImage: {
                    contentType: 'Image',
                    url: value.asset.url,
                    alt: value.asset.creditLine,
                    credit: value.asset.creditLine,
                    caption: value.asset.creditLine,
                }
            }

            return <div className={clsx('mb-2')}>
                <ImageComponent image={bodyImage} />
            </div>
        },
        code: ({ value }: any) => {
            const bodyCode: BodyCode = {
                contentType: "BodyCode",
                sysId: value._key,
                code: value.code,
                language: value.language

            }
            return <div>
                <HighlightedCodeComponent data={bodyCode} />
            </div>

        },
        markdown: ({ value }: any) => {
            const bodyMarkdown: BodyMarkdown = {
                contentType: 'BodyMarkdown',
                sysId: value._key,
                markdown: value.markdown
            }
            return <div>
                <MarkdownComponent data={bodyMarkdown} />
            </div>
        }
    }
}


const Renderer = ({ document } = { document: undefined }) => {
    if (!document) {
        return null;
    }
    return <Fragment>
        <PortableText
            value={document}
            components={portableTextComponents}
        />

    </Fragment>
}

Renderer.propTypes = {
    document: PropTypes.object
}

export {
    Renderer
};