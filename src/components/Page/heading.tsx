'use client';
import React from "react";
import clsx from "clsx";
import {usePageContext} from "./context";
import {BannerComponent} from "../Banner";

export const HeadingComponent = () => {
    const {
        ctxData: {
            heading,
            banners
        }
    } = usePageContext();


    return <div className={clsx(
        'relative'
    )}>
        <BannerComponent banners={banners}/>
        <div className={clsx(
            'w-full',
            'mt-4',
            'md:pb-8',
            'xs:static sm:static md:absolute',
            'bottom-0'
        )}>
            <div className={clsx(
                'content-container'
            )}>
                <h1 className={clsx(
                    'mt-0 mb-0',
                    'text-white',
                    'text-shadow-lg',
                    'bg-gray-950',
                    'p-4 rounded-md',
                    'font-black-ops'
                )}
                style={{ '--tw-bg-opacity': 0.40} as React.CSSProperties}>{heading}</h1>
            </div>
        </div>
    </div>;
}