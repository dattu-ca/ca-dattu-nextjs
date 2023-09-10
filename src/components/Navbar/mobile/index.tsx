'use client'
import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {MenuMobile} from "./menuMobile";
import {Logo} from "../logo";


const NavbarMobile = () => {
    return (
        <div className={clsx(
            'pb-[72px]'
        )}>
            <nav className={clsx(
                'w-full bg-site-color-dark',
                'py-4 px-4',
                'shadow-2xl',
                'fixed z-[100] left-0',
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
                    <div>
                        <MenuMobile/>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export {NavbarMobile};