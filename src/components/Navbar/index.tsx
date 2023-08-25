'use client';
import {IBlogNavbar, ISiteConfig} from "~/models";
import {NavbarContextProvider} from './context';
import {Navbar} from './navbar';

interface IProps {
    navbar: IBlogNavbar;
    siteConfig: ISiteConfig;
}

const NavbarComponent = ({navbar, siteConfig}: IProps) => {
    return <NavbarContextProvider siteConfig={siteConfig} navbar={navbar}>
        <Navbar/>
    </NavbarContextProvider>
}

export default NavbarComponent;