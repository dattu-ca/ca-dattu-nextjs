'use client'
import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {MenuDesktop} from "./menuDesktop";
import {MenuMobile} from "./menuMobile";
import {Logo} from "./logo";


const Navbar = () => {
    return (
        <div className={clsx(
            'mb-24'
        )}>
            <nav className={clsx(
                'w-full bg-site-color-dark',
                'py-4 px-4 mb-4',
                'shadow-2xl',
                'fixed top-0 left-0'
            )}
                 style={{'--tw-bg-opacity': 0.95} as React.CSSProperties}>
                <div className={clsx(
                    'flex justify-between items-center',
                )}>
                    <div>
                        <Link href='/'
                              className={clsx(
                                  'hover:after:w-0',
                                  'hover:skew-y-12'
                              )}>
                            <Logo/>
                        </Link>
                    </div>
                    <div className={clsx(
                        'hidden md:block'
                    )}>
                        <MenuDesktop/>
                    </div>
                    <div className={clsx(
                        'md:hidden block'
                    )}>
                        <MenuMobile/>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export {Navbar};