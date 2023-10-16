'use client';
import { BodyCode } from "~/models"
import { CodeRenderer } from "./renderer";
import { useEffect, useState } from "react";


interface IProps {
    data: BodyCode
}


const HighlightedCodeComponent = ({ data }: IProps) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (typeof window === 'undefined' || !isClient) {
        return null;
    }
    return <CodeRenderer data={data} />
}

export {
    HighlightedCodeComponent
}