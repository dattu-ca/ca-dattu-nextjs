'use client';
import {IBlogNavbar, ISiteConfig} from "~/models";
import {NavbarContextProvider} from './context';
import MenuComponent from './menu';

interface IProps {
    navbar: IBlogNavbar;
    siteConfig: ISiteConfig;
}

const NavbarComponent = ({navbar, siteConfig}: IProps) => {
    return <NavbarContextProvider siteConfig={siteConfig} navbar={navbar}>
        <MenuComponent/>
    </NavbarContextProvider>
}

export default NavbarComponent;