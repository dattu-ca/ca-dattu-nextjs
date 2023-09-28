import React from 'react';
import clsx from "clsx";
import {CustomRichTexRenderer} from "~/components/CustomRichTextRenderer";
import {BlogPost} from "~/models";

import {PostContextProvider} from "./context";
import dayjs from "dayjs";
import {SeriesBanner} from "~/components/Series/seriesBanner";

interface IProps {
    data: BlogPost;
}

export const PostComponent = (props: IProps) => {
    const {data} = props;
    const {body, heading} = data;

    return <PostContextProvider data={data}>
        <div className={clsx()}>
            <div className={clsx()}>
                <span aria-label='Published on'>{dayjs(data.publishedDate).format('MMM DD, YYYY')}</span>
            </div>
            {
                data.series && (<div className={clsx()}><SeriesBanner series={data.series}/></div>)
            }
            <h1>{heading}</h1>
            <CustomRichTexRenderer document={body}/>
        </div>
    </PostContextProvider>;
}