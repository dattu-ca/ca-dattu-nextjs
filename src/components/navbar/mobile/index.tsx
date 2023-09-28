'use client';
import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {MenuMobile} from "./menuMobile";
import {Logo} from "../logo";


const NavbarMobile = () => {
    return (
        <div className={clsx()}>
            <nav className={clsx()}
                 style={{'--tw-bg-opacity': 0.95} as React.CSSProperties}>
                <div className={clsx()}>
                    <div>
                        <Link href='/'
                              className={clsx()}>
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