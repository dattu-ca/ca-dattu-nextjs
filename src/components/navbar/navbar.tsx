'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import clsx from "clsx";
import {useBreakpoint} from "~/hooks/useBreakpoint";
import {ThemeSwitcher} from "../themeSwitcher";
import {Logo} from "./logo";
import {MenuMobile} from "./mobile";
import {MenuDesktop} from "./desktop";


const Navbar = () => {
    const {isAboveMd} = useBreakpoint("md");
    
    const [isDesktop, setIsDesktop] = useState(true)
    
    useEffect(() => {
        setIsDesktop(isAboveMd);
    }, [isAboveMd]);
    
    return (
        <nav className={clsx(
            'top-0 z-10 h-16 pt-6'
        )}>
            <div className={clsx(
                'mx-auto w-full max-w-7xl lg:px-8'
            )}>
                <div className={clsx(
                    'relative px-4 sm:px-8 lg:px-12'
                )}>
                    <nav className={clsx(
                        'relative flex gap-4'
                    )}>
                        <div className={clsx(
                            'flex flex-1'
                        )}>
                            <Link href='/'
                                  className={clsx()}>
                                <Logo/>
                            </Link>
                        </div>
                        <div className={clsx(
                            'flex flex-1 justify-end md:justify-center'
                        )}>
                            <div className={clsx('hidden md:block')}>{isDesktop && <MenuDesktop/>}</div>
                            <div className={clsx('block')}>{!isDesktop && <MenuMobile/>}</div>
                        </div>
                        <div className={clsx(
                            'flex justify-end md:flex-1'
                        )}>
                            <ThemeSwitcher/>
                        </div>
                    </nav>
                </div>
            </div>
            
        </nav>
    )
};

export {Navbar};