'use client';
import React, {Fragment} from 'react';
import clsx from "clsx";
import {CustomRichTexRenderer} from "~/components/CustomRichTextRenderer";
import {IBlogPage} from "~/models";

import {PageContextProvider} from "~/components/Page/context";
import {SidebarComponent} from "~/components/Sidebar";
import {BannerComponent} from "~/components/Banner";

interface IProps {
    data: IBlogPage;
}

export const PageComponent = (props: IProps) => {
    const {data} = props;
    const {body,banners, sidebars, heading} = data;
    const hasSidebar = sidebars && Array.isArray(sidebars) && sidebars?.length > 0;
    return <PageContextProvider data={data}>
        <div className={clsx(
            'pb-4'
        )}>
            {
                banners && <BannerComponent banners={banners}/>
            }
            <div className={clsx(
                'overflow-y-auto',
                'content-container',
            )}>
                <div className={clsx(
                    'flex flex-col md:flex-row gap-6 items-start',
                    'mt-8',
                )}>
                    <div className={clsx(                        
                        'w-full',
                        'bg-white p-8',
                        'shadow-sm',
                        {
                            ['md:w-2/3']: hasSidebar,
                        }
                    )}>
                        <h1
                            className={clsx(
                                'inline-block',
                                'mt-0 mb-4',
                                'font-acme',
                            )}
                            style={{'--tw-bg-opacity': 0.40} as React.CSSProperties}>
                            {heading}
                        </h1>
                        <CustomRichTexRenderer document={body}/>
                    </div>
                    {
                        hasSidebar
                        && (
                            <div className={clsx(
                                'w-full md:w-1/3'
                            )}>
                                {
                                    sidebars?.map(sidebar => (
                                        <Fragment key={sidebar.heading}>
                                            <SidebarComponent sidebar={sidebar}/>
                                        </Fragment>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </PageContextProvider>;
}