import {Fragment} from "react";
import clsx from "clsx";
import Link from "next/link";
import {PortableText} from '@portabletext/react';
import {BodyImage, BodyCode, BodyMarkdown} from '~/models';
import {ImageComponent} from "~/app.ui.components/imageComponent";
import {HighlightedCodeComponent} from "~/app.ui.components/highlightedCodeComponent";
import {MarkdownComponent} from "~/app.ui.components/markdownComponent";


const portableTextComponents = {
    marks: {
        em: ({children}: any) => <em className={clsx()}>{children}</em>,
        strong: ({children}: any) => <strong className={clsx()}>{children}</strong>,
        u: ({children}: any) => <u className={clsx()}>{children}</u>,
        code: ({children}: any) => <code className={clsx()}>{children}</code>,
        del: ({children}: any) => <del className={clsx()}>{children}</del>,
        link: ({children, value}: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                rel ? <a href={value.href} rel={rel} target='_blank'>
                    {children}
                </a> : <Link href={value.href}>{children}</Link>
            )
        },
    },
    types: {
        image: ({value}: any) => {
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
                    alt: value.asset.altText || value.asset.description,
                    credit: value.asset.creditLine,
                    caption: value.asset.title || value.asset.creditLine,
                },
            }

            return <div className={clsx('mb-2')}>
                <ImageComponent image={bodyImage}/>
            </div>
        },
        code: ({value}: any) => {
            const bodyCode: BodyCode = {
                contentType: "BodyCode",
                sysId: value._key,
                code: value.code,
                language: value.language

            }
            return <div>
                <HighlightedCodeComponent data={bodyCode}/>
            </div>

        },
        markdown: ({value}: any) => {
            const bodyMarkdown: BodyMarkdown = {
                contentType: 'BodyMarkdown',
                sysId: value._key,
                markdown: value.markdown
            }
            return <div>
                <MarkdownComponent data={bodyMarkdown}/>
            </div>
        }
    }
}


interface IProps {
    document?: any | undefined
}

const Renderer = ({document}: IProps) => {
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

export {
    Renderer
};