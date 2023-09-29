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
    
    const [isDesktop, setIsDesktop] = useState(false)
    
    useEffect(() => {
        setIsDesktop(isAboveMd);
    }, [isAboveMd]);
    
    return (
        <div className={clsx(
            'h-[88px] w-full',
        )}>
            <nav className={clsx(
                'fixed',
                'top-0 z-10 pt-6 pb-6',
                'w-full',
                'bg-white/95 dark:bg-slate-900/95',
                'shadow-xl'
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
        </div>
    )
};

export {Navbar};