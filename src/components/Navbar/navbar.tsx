'use client'
import React, {Fragment, useEffect, useState} from 'react';
import {useBreakpoint} from "~/hooks/useBreakpoint";
import {NavbarDesktop} from "./desktop";
import {NavbarMobile} from "./mobile";
import clsx from "clsx";


const Navbar = () => {
    const {isAboveSm} = useBreakpoint("sm");
    
    const [isDesktop, setIsDesktop] = useState(false)
    
    useEffect(() => {
        setIsDesktop(isAboveSm);
    }, [isAboveSm]);
    
    return (
        <Fragment>
            <div className={clsx('hidden sm:block')}>{isDesktop && <NavbarDesktop/>}</div>
            <div className={clsx('block sm:hidden')}>{!isDesktop && <NavbarMobile/>}</div>
        </Fragment>
    )
};

export {Navbar};