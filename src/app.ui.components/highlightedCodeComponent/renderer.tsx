'use client';
import clsx from "clsx";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useMemo, useRef, useState } from "react";
import { BodyCode } from "~/models"


interface IProps {
    data: BodyCode
}

const getLanguage = (language?: string | undefined) => {
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

const getDataTheme = () => {
    const element = document.getElementsByTagName('html')[0];
    return element.getAttribute('data-theme');
}


const CodeRenderer = ({ data }: IProps) => {
    const [theme, setTheme] = useState(getDataTheme());
    const preRef = useRef<HTMLPreElement>(null);

    const [preHeight, setPreHeight] = useState(0)

    useEffect(() => {
        if (preRef && preRef.current) {
            setPreHeight(preRef.current.clientHeight)
        }
    }, [])

    useEffect(() => {
        const element = document.getElementsByTagName('html')[0];

        function callback() {
            setTheme(getDataTheme());
        }

        const mutationObserver = new MutationObserver(callback);
        mutationObserver.observe(element, { attributes: true });


    }, [])

    const language = useMemo(() => getLanguage(data.language), [data.language])


    return <div className={clsx('relative pt-0')}
        style={{ height: `${preHeight}px` }}>
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
    CodeRenderer
}