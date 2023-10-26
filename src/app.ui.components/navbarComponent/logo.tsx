'use client';
import {useMemo} from "react";
import clsx from "clsx";
import Image from 'next/image';
import {useNavbarContext} from './context';
import classes from './logo.module.css';


const Logo = () => {
    const {ctxData: {logo}} = useNavbarContext();

    const srcSet = useMemo(() => {
        const srcSet = [];
        if (logo) {
            if (logo.mobileImage?.url) {
                srcSet.push(`${logo.mobileImage?.url}`) //?fm=avif&w=40&q=75 640w
            } else {
                srcSet.push(`${logo.desktopImage?.url}`) //?fm=avif&w=40&q=75 640w
            }
            // const sizes = [750, 828, 1080, 1200, 1920, 2048, 3840]
            // sizes.forEach(size => {
            //     srcSet.push(`${logo.desktopImage?.url}`) //?fm=avif&w=40&q=75 ${size}w
            // })
        }
        return srcSet;
    }, [logo])

    return <Image alt={logo?.desktopImage?.alt || 'logo'}
                  loading="lazy"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className={clsx(classes.flip)}
                  sizes="40px"
                  srcSet={srcSet.join(', ')}
                  src={srcSet[srcSet.length - 1]}/>
}

export {Logo};