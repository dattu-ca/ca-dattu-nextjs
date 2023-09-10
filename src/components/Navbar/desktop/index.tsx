'use client'
import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {MenuDesktop} from "./menuDesktop";
import {Logo} from "../logo";
import {useNavbarContext} from "../context";
import {MenuLoggedInDesktop} from "./menuLoggedInDesktop";


const NavbarDesktop = () => {
    const {
        ctxData: {
            session,
        },
    } = useNavbarContext();
    return (
        <div className={clsx(
            {
                ['pb-[72px]']: !session,
                ['pb-[136px]']: session,
            }
        )}>
            {
                session
                && (
                    <nav className={clsx(
                        'w-full bg-site-color-dark',
                        'py-4 px-4',
                        'shadow-2xl',
                        'fixed z-[100] top-0 left-0'
                    )}>
                        <div className={clsx(
                            'flex justify-end items-center',
                        )}>
                            <MenuLoggedInDesktop/>
                        </div>
                    </nav>
                )
            }
            <nav className={clsx(
                'w-full bg-site-color-dark',
                'py-4 px-4',
                'shadow-2xl',
                'fixed z-[100] left-0',
                {
                    ['top-0 ']: !session,
                    ['top-[64px]']: session,
                }
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
                        <MenuDesktop/>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export {NavbarDesktop};