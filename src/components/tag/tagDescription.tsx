import React from "react";
import clsx from "clsx";
import {MetaTag} from "~/models";
import {CustomRichTexRenderer} from "../customRichTextRenderer";


interface IProps {
    tag: MetaTag,
}

const TagDescription = ({tag}: IProps) => {
    const {name, description} = tag;
    return <div className={clsx()}>
        <h4 className={clsx()}>
            <span>{name}</span>
        </h4>

        <CustomRichTexRenderer document={description}/>
    </div>
}

export {
    TagDescription
}