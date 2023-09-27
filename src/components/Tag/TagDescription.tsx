import React from "react";
import clsx from "clsx";
import {MetaTag} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";


interface IProps {
    tag: MetaTag,
}

const TagDescription = ({tag}: IProps) => {
    const {name, description} = tag;
    return <section className={clsx(
        'bg-white p-4 md:p-8',
        'shadow-md'
    )}>
        <h4 className={clsx(
            'mb-4',
        )}>
            <span>{name}</span>
        </h4>

        <CustomRichTexRenderer document={description}/>
    </section>
}

export {
    TagDescription
}