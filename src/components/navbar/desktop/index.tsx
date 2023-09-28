'use client'
import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {MenuDesktop} from "./menuDesktop";
import {Logo} from "../logo";
import {ThemeSwitcher} from "../../themeSwitcher";


const NavbarDesktop = () => {
    return (
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
                        <MenuDesktop/>
                    </div>
                    <div className={clsx(
                        'flex justify-end md:flex-1'
                    )}>
                        <ThemeSwitcher/>
                    </div>
                </nav>
            </div>


        </div>
    )
}

export {NavbarDesktop};