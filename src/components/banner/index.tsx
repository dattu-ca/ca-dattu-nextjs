"use client";
import {Fragment, useState} from 'react';
import clsx from "clsx";
import {useSwipeable} from "react-swipeable";
import {BodyImage, BodyYoutube} from "~/models";
import {RenderedImage} from './renderedImage';
import {RenderedYoutube} from "./renderedYoutube";


interface IProps {
    banners: (BodyImage | BodyYoutube)[];
}

export const BannerComponent = ({banners}: IProps) => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    const bannersLength = banners?.length ?? 0;

    const onGoPrevHandler = () => {
        setVisibleIndex(prev => Math.max(prev - 1, 0))
    }
    const onGoNextHandler = () => {
        setVisibleIndex(prev => Math.min(prev + 1, Math.max(bannersLength - 1, 0)))
    }


    const swipeHandlers = useSwipeable({
        onSwiped: (eventData) => {
            if (eventData.dir === 'Left') {
                onGoNextHandler();
            } else if (eventData.dir === 'Right') {
                onGoPrevHandler();
            }
        },
    });

    return bannersLength > 0
        && (
            <div className={clsx(
                
            )}>
                <div {...swipeHandlers}
                     className={clsx()}>
                    {
                        banners.map((banner, index) => (
                            <div key={index} className={clsx('w-full')}>
                                {
                                    banner.contentType === 'BodyImage'
                                    && <RenderedImage banner={banner as BodyImage}/>
                                }
                                {
                                    banner.contentType === 'BodyYoutube'
                                    && <RenderedYoutube data={banner as BodyYoutube}/>
                                }
                            </div>
                        ))
                    }
                </div>
                {
                    banners.length > 1
                    && <Fragment>
                        <button onClick={onGoPrevHandler}
                                disabled={visibleIndex === 0}
                                className={clsx()}
                                aria-label='Slide to the previous banner'>
                            &lt;
                        </button>
                        <button onClick={onGoNextHandler}
                                disabled={visibleIndex === bannersLength - 1}
                                className={clsx()}
                                aria-label='Slide to the next banner'>
                            &gt;
                        </button>
                    </Fragment>
                }
            </div>
        );
}