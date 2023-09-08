'use client';
import clsx from "clsx";
import {useNavbarContext} from './context';
import classes from './logo.module.css';
import Image from "next/image";


const Logo = () => {
    const {ctxData: {logo}} = useNavbarContext();

    return (
        <Image
            src={`https:${logo?.desktopImage?.url}?fm=avif`}
            className={clsx(
                    'transition-all',
                    'block w-auto h-[30px]',
                    classes.flip
                )}
            alt={logo.desktopImage?.alt as string}
            width={40}
            height={40}
            sizes="100vw"
        />
    )
}

export {Logo};