'use client'
import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import {useBreakpoint} from "~/hooks/useBreakpoint";
import {NavbarDesktop} from "./desktop";
import {NavbarMobile} from "./mobile";


const Navbar = () => {
    const {isAboveMd, isBelowMd} = useBreakpoint("md");
    
    const [isDesktop, setIsDesktop] = useState(true)
    
    useEffect(() => {
        setIsDesktop(isAboveMd);
    }, [isAboveMd]);
    
    return (
        <nav className={clsx(
            'top-0 z-10 h-16 pt-6'
        )}>
            <div className={clsx('hidden md:block')}>{isDesktop && <NavbarDesktop/>}</div>
            <div className={clsx('block')}>{isBelowMd && <NavbarMobile/>}</div>
        </nav>
    )
};

export {Navbar};