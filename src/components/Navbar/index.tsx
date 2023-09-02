'use client';
import {ISiteNavbar} from "~/models";
import {NavbarContextProvider} from './context';
import {Navbar} from './navbar';

interface IProps {
    navbar: ISiteNavbar;
}

const NavbarComponent = ({navbar}: IProps) => {
    return <NavbarContextProvider navbar={navbar}>
        <Navbar/>
    </NavbarContextProvider>
}

export default NavbarComponent;