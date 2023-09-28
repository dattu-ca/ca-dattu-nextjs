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
        <div className={clsx()}>
            {
                session
                && (
                    <nav className={clsx()}>
                        <div className={clsx()}>
                            <MenuLoggedInDesktop/>
                        </div>
                    </nav>
                )
            }
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
                        <MenuDesktop/>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export {NavbarDesktop};