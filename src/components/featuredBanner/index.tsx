"use client";
import clsx from "clsx";
import {BodyImage, BodyYoutube} from "~/models";
import {RenderedImage} from './renderedImage'
import {RenderedYoutube} from "./renderedYoutube";


interface IProps {
    featuredBanner?: BodyImage | BodyYoutube | undefined,
}

export const FeaturedBanner = ({featuredBanner}: IProps) => {

    if (!featuredBanner) {
        return null;
    }
    return (
        <div className={clsx()}>
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