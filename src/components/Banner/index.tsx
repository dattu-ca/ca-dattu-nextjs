"use client";
import {useState} from 'react';
import clsx from "clsx";
import {ReactIcon} from '../ReactIcon';
import {IBodyImage} from "~/models";


interface IProps {
    banners: IBodyImage[],
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

    return <div className={clsx(
        'group'
    )}>
        {
            bannersLength > 0
            && <div className={clsx(
                'relative'
            )}>
                <div className={clsx(
                    ' flex col-auto overflow-hidden'
                )}>
                    {
                        banners.map((banner, index) => (
                            <div key={index} className={clsx(
                                'relative h-full w-full flex-[0_0_100%]',
                                'transition-all'
                            )}
                                 style={{'transform': `translateX(-${visibleIndex * 100}%)`}}
                            >
                                <picture className={clsx(
                                    'w-full',
                                    'object-cover',
                                    'object-center'
                                )}>
                                    <source srcSet={`${banner.desktopImage?.url}?fm=avif`}
                                            type="image/avif"
                                            className={clsx(
                                                'w-full',
                                                'object-cover',
                                                'object-center',
                                                'aspect-[8/2]'
                                            )}
                                            width='100%'
                                    />
                                    <img src={banner.desktopImage?.url}
                                         alt={banner.desktopImage?.alt}
                                         className={clsx(
                                             'w-full',
                                             'object-cover',
                                             'object-center',
                                             'aspect-[8:2]'
                                         )}
                                         width='100%'
                                    />
                                </picture>
                            </div>
                        ))
                    }
                </div>
                {
                    banners.length > 0
                    && <div className={clsx(
                        'absolute w-full top-[50%] translate-y-[-50%]',
                        'flex justify-between px-2'
                    )}>
                        <button onClick={onGoPrevHandler}
                                disabled={visibleIndex === 0}
                                className={clsx(
                                    'transition-all',
                                    'opacity-25 group-hover:opacity-50 group-hover:hover:opacity-90 disabled:opacity-10 group-hover:disabled:opacity-10',
                                    'p-2 m-0',
                                    'bg-site-primary'
                                )}
                                aria-label='Slide to the previous banner'>
                            <ReactIcon icon='BsFillCaretLeftFill' className='w-8 h-8 text-white'/>
                        </button>
                        <button onClick={onGoNextHandler}
                                disabled={visibleIndex === bannersLength - 1}
                                className={clsx(
                                    'transition-all',
                                    'opacity-25 group-hover:opacity-50 group-hover:hover:opacity-90 disabled:opacity-10 group-hover:disabled:opacity-10',
                                    'p-2 m-0',
                                    'bg-site-primary'
                                )}
                                aria-label='Slide to the next banner'>
                            <ReactIcon icon='BsFillCaretRightFill' className='w-8 h-8 text-white'/>
                        </button>
                    </div>
                }
            </div>
        }
    </div>;
}