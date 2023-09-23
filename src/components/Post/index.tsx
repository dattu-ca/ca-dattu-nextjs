'use client';
import React from 'react';
import clsx from "clsx";
import {CustomRichTexRenderer} from "~/components/CustomRichTextRenderer";
import {IBlogPost} from "~/models";

import {PostContextProvider} from "./context";
import {BannerComponent} from "~/components/Banner";

interface IProps {
    data: IBlogPost;
}

export const PostComponent = (props: IProps) => {
    const {data} = props;
    const {body, banners, heading} = data;
    return <PostContextProvider data={data}>
        <div className={clsx(
            'pb-4'
        )}>
            {
                banners && <BannerComponent banners={banners}/>
            }
            <div className={clsx(
                'overflow-y-auto',
                'mt-8',
                'container',
            )}>
                <div className={clsx(
                    'bg-white p-4 md:p-8',
                    'shadow-sm',
                )}>
                    <h1>{heading}</h1>
                    <CustomRichTexRenderer document={body}/>
                </div>
            </div>
        </div>
    </PostContextProvider>;
}