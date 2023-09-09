'use client'
import React, {Fragment} from 'react';
import clsx from "clsx";
import {NavbarDesktop} from "./desktop";
import {NavbarMobile} from "./mobile";


const Navbar = () => {
    return (
        <Fragment>
            <div className={clsx(
                'hidden md:block'
            )}>
                <NavbarDesktop/>
            </div>
            <div className={clsx(
                'xs:block sm:block md:hidden'
            )}>
                <NavbarMobile/>
            </div>
        </Fragment>
    )
};

export {Navbar};