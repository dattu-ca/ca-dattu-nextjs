import React from "react";
import clsx from "clsx";
import {MetaSeries} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";
import {IoIosAlbums} from "react-icons/io";


interface IProps {
    series: MetaSeries,
}

const SeriesDescription = ({series}: IProps) => {
    const {name, description} = series;
    return <section className={clsx(
        'bg-white p-4 md:p-8',
        'shadow-md'
    )}>
        <h4 className={clsx(
            'mb-4',
            'flex flex-wrap gap-2',
            'items-center'
        )}>
            <IoIosAlbums className={'w-8 h-8'}/>
            <span>{name}</span>
        </h4>

        <CustomRichTexRenderer document={description}/>
    </section>
}

export {
    SeriesDescription
}