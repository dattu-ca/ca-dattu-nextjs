'use client';
import clsx from "clsx";
import {BannerComponent} from "./banner";
import {usePageContext} from "./context";

export const HeadingComponent = () => {
    const {
        ctxData: {
            heading
        }
    } = usePageContext();
    
    
    return <div>
        <BannerComponent/>
        <div className={clsx(
            'bg-gray-950',
            'w-full',
            'pb-8 pt-8',
        )}>
            <div className={clsx(
                'container mx-auto'
            )}>
                <h1 className={clsx(
                    'mb-0',
                    'text-site-primary',
                    'drop-shadow-xl'
                )}>{heading}</h1>
            </div>
        </div>
    </div>;
}