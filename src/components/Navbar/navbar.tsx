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
            'pb-[72px]'
        )}>
            <nav className={clsx(
                'w-full bg-site-color-dark',
                'py-4 px-4',
                'shadow-2xl',
                'fixed z-40 top-0 left-0'
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
                        'xs:block sm:block md:hidden'
                    )}>
                        <MenuMobile/>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export {Navbar};