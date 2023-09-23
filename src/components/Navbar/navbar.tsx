'use client'
import React, {Fragment} from 'react';
import {useBreakpoint} from "~/hooks/useBreakpoint";
import {NavbarDesktop} from "./desktop";
import {NavbarMobile} from "./mobile";


const Navbar = () => {
    const {isAboveSm} = useBreakpoint("sm");
    return (
        <Fragment>
            {
                isAboveSm
                && <NavbarDesktop/>
            }
            {
                !isAboveSm
                && <NavbarMobile/>
            }
        </Fragment>
    )
};

export {Navbar};