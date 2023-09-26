'use client';
import React from 'react';
import clsx from "clsx";
import {IBlogPage} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";
import {PageContextProvider} from "./context";
import {BannerComponent} from "../Banner";

interface IProps {
    data: IBlogPage;
}

export const PageComponent = ({data}: IProps) => {
    const {body, banners, heading} = data;
    return <PageContextProvider data={data}>
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
    </PageContextProvider>;
}