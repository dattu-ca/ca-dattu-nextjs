import React from "react";
import clsx from "clsx";
import {MetaSeries} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";


interface IProps {
    series: MetaSeries,
}

const SeriesDescription = ({series}: IProps) => {
    const {name, description} = series;
    return <section className={clsx()}>
        <h4 className={clsx()}>
            <span>{name}</span>
        </h4>

        <CustomRichTexRenderer document={description}/>
    </section>
}

export {
    SeriesDescription
}