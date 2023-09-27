"use client";
import clsx from "clsx";
import {BodyImage, BodyYoutube} from "~/models";
import {RenderedImage} from './renderedImage'
// import Image from 'next/image';
import {RenderedYoutube} from "./renderedYoutube";


interface IProps {
    featuredBanner?: BodyImage | BodyYoutube | undefined,
}

export const FeaturedBanner = ({featuredBanner}: IProps) => {

    if (!featuredBanner) {
        return null;
    }
    return (
        <div className={clsx(
            'relative h-full w-full',
            'transition-all'
        )}
        >
            {
                featuredBanner.contentType === 'BodyImage'
                && <RenderedImage banner={featuredBanner as BodyImage}/>
            }
            {
                featuredBanner.contentType === 'BodyYoutube'
                && <RenderedYoutube data={featuredBanner as BodyYoutube}/>
            }
        </div>
    );
}