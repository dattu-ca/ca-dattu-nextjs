'use client';
import {useNavbarContext} from './context';
import clsx from "clsx";
import classes from './logo.module.css';




const Logo = () => {
    const {navbar} = useNavbarContext();

    return (
        <picture className={clsx(
            'transition-all',
            'block w-auto h-[30px]',
            classes.flip
        )}>
            <source
                media="(max-width: 768px)"
                srcSet={`${navbar.logo?.mobileImage?.url} 768w`}
                sizes="768px"
                className='w-auto h-[40px]'
            />
            <source
                srcSet={`${navbar.logo?.desktopImage?.url} 1280w`}
                sizes="1280px"
            />
            <img src={navbar.logo?.desktopImage?.url}
                 alt={navbar.logo?.desktopImage?.alt}
                 className='h-[40px] max-w-none w-auto'
                 width={40}
                 height={40}
            />
        </picture>
    )
}

export {Logo};