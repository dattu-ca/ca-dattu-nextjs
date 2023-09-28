import React from "react";
import clsx from "clsx";
import {MetaTag} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";


interface IProps {
    tag: MetaTag,
}

const TagDescription = ({tag}: IProps) => {
    const {name, description} = tag;
    return <section className={clsx()}>
        <h4 className={clsx()}>
            <span>{name}</span>
        </h4>

        <CustomRichTexRenderer document={description}/>
    </section>
}

export {
    TagDescription
}