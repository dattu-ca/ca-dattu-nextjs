"use client";
import {Fragment, useState} from 'react';
import clsx from "clsx";
import {BodyImage, BodyYoutube} from "~/models";
import {RenderedImage} from './renderedImage'
// import Image from 'next/image';
import {BsFillCaretLeftFill, BsFillCaretRightFill} from "react-icons/bs";
import {RenderedYoutube} from "~/components/Banner/renderedYoutube";
import {useSwipeable} from "react-swipeable";


interface IProps {
    banners: (BodyImage | BodyYoutube)[],
}

export const BannerComponent = ({banners}: IProps) => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const bannersLength = banners.length;

    const onGoPrevHandler = () => {
        setVisibleIndex(prev => Math.max(prev - 1, 0))
    }
    const onGoNextHandler = () => {
        setVisibleIndex(prev => Math.min(prev + 1, bannersLength - 1))
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

    return <div className={clsx(
        'group'
    )}>
        {
            bannersLength > 0
                ? (
                    <div className={clsx(
                        'relative'
                    )}>
                        <div {...swipeHandlers}
                             className={clsx(
                                 'flex col-auto overflow-hidden',
                                 'bg-gray-900'
                             )}>
                            {
                                banners.map((banner, index) => (
                                    <div key={index} className={clsx(
                                        'relative h-full w-full flex-[0_0_100%]',
                                        'transition-all'
                                    )}
                                         style={{'transform': `translateX(-${visibleIndex * 100}%)`}}
                                    >
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
                                        className={clsx(
                                            'transition-all',
                                            'opacity-25 group-hover:opacity-50 group-hover:hover:opacity-90 disabled:opacity-10 group-hover:disabled:opacity-10',
                                            'p-2 m-0',
                                            'bg-site-primary',
                                            'absolute top-[50%] translate-y-[-50%] left-0'
                                        )}
                                        aria-label='Slide to the previous banner'>
                                    <BsFillCaretLeftFill className='w-8 h-8 text-white'/>
                                </button>
                                <button onClick={onGoNextHandler}
                                        disabled={visibleIndex === bannersLength - 1}
                                        className={clsx(
                                            'transition-all',
                                            'opacity-25 group-hover:opacity-50 group-hover:hover:opacity-90 disabled:opacity-10 group-hover:disabled:opacity-10',
                                            'p-2 m-0',
                                            'bg-site-primary',
                                            'absolute top-[50%] translate-y-[-50%] right-0'
                                        )}
                                        aria-label='Slide to the next banner'>
                                    <BsFillCaretRightFill className='w-8 h-8 text-white'/>
                                </button>
                            </Fragment>
                        }
                    </div>
                )
                : (
                    <div className={clsx(
                        'aspect-[8/2] bg-gray-900'
                    )}/>
                )
        }
    </div>;
}