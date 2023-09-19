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
        {
            banners && <BannerComponent banners={banners}/>
        }
        <div className={clsx(
            'w-full',
            'mt-4',
            'md:pb-8',
            'xs:static sm:static ',
            'bottom-0', {
                ['md:absolute']: banners,
                ['md:static']: !banners,
            }
        )}>
            <div className={clsx(
                'content-container'
            )}>
                <h1 className={clsx(
                    'inline-block',
                    'mt-0 mb-0',
                    'font-acme',
                    {
                        [[
                            'md:text-white',
                            'md:text-shadow-lg',
                            'md:bg-gray-950',
                            'md:p-4 rounded-md',
                        ].join(' ')]   : banners
                }


                    )}
                    style={{'--tw-bg-opacity': 0.40} as React.CSSProperties}>
                    {heading}
                </h1>
            </div>
        </div>
    </div>;
}