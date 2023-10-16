'use client';
import clsx from "clsx";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useMemo, useRef, useState } from "react";
import { BodyCode } from "~/models"


interface IProps {
    data: BodyCode
}

const getLanguage = (language?: string | undefined) => {
    console.log('language', language)
    if (!language) {
        return '';
    }
    switch (language) {
        case 'javascript':
            return 'js';
        default:
            return language;
    }

}


const HighlightedCodeComponent = ({ data }: IProps) => {
    const [theme, setTheme] = useState(document.querySelector('html')?.getAttribute('data-theme'));
    const preRef = useRef<HTMLPreElement>(null);

    const [preHeight, setPreHeight] = useState(0)

    useEffect(() => {
        if (preRef && preRef.current) {
            setPreHeight(preRef.current.clientHeight)
        }
    }, [])

    useEffect(() => {
        const html = document.getElementsByTagName('html')[0];

    }, [])

    const language = useMemo(() => getLanguage(data.language), [data.language])


    return <div className={clsx('relative pt-0')}
        style={{ height: `${preHeight}px` }}>
        <p>{theme}</p>
        <div className={clsx(
            'rounded-none',
            'daisyui-badge daisyui-badge-lg',
            'absolute',
            'z-10',
            'top-0 right-0',
        )}>
            {language}
        </div>
        <Highlight
            theme={theme === 'light' ? themes.oneLight : themes.nightOwl}
            code={data.code}
            language={language}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre style={style}
                    className={clsx(
                        'pt-8',
                        'absolute',
                        'left-0 right-0',
                        'overflow-x-auto'
                    )}
                    ref={preRef}>
                    <div className={clsx(
                        className,
                        'p-2',
                    )}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </div>
                </pre>
            )}
        </Highlight>
    </div>
}

export {
    HighlightedCodeComponent
}