'use client';
import clsx from "clsx";
import {useNavbarContext} from './context';
import classes from './logo.module.css';
import {useMemo} from "react";


const Logo = () => {
    const {ctxData: {logo}} = useNavbarContext();

    const srcSet = useMemo(() => {
        const srcSet = [];
        if (logo.mobileImage) {
            srcSet.push(`${logo.mobileImage.url}?fm=avif&w=40&q=75 640w`)
        } else if ("url" in logo.desktopImage) {
            srcSet.push(`${logo.desktopImage.url}?fm=avif&w=40&q=75 640w`)
        }
        if ("url" in logo.desktopImage) {
            const sizes = [750, 828, 1080, 1200, 1920, 2048, 3840]
            sizes.forEach(size => {
                if ("url" in logo.desktopImage) {
                    srcSet.push(`${logo.desktopImage.url}?fm=avif&w=40&q=75 ${size}w`)
                }
            })
        }
        return srcSet;
    }, [logo])

    return <img alt={logo.desktopImage?.alt}
                loading="lazy" 
                width="40"
                height="40"
                decoding="async"
                data-nimg="1"
                className={clsx(
                    'transition-all',
                    'block w-auto h-[30px]',
                    classes.flip
                )}
                sizes="40px"
                srcSet={srcSet.join(', ')}
                src={srcSet[srcSet.length - 1]}/>

    // return (
    //     <picture className={clsx(
    //         'transition-all',
    //         'block w-auto h-[30px]',
    //         classes.flip
    //     )}>
    //         <source
    //             media="(max-width: 768px)"
    //             srcSet={`${logo?.mobileImage?.url} 768w`}
    //             sizes="768px"
    //             className='w-auto h-[40px]'
    //         />
    //         <source
    //             srcSet={`${logo?.desktopImage?.url} 1280w`}
    //             sizes="1280px"
    //         />
    //         <img src={logo?.desktopImage?.url}
    //              alt={logo?.desktopImage?.alt}
    //              className='h-[40px] max-w-none w-auto'
    //              width={40}
    //              height={40}
    //         />
    //     </picture>
    // )
}

export {Logo};