'use client';
import {Session} from "next-auth";
import {SiteNavbar} from "~/models";
import {NavbarContextProvider} from './context';
import {Navbar} from './navbar';

interface IProps {
    navbar: SiteNavbar;
    session: Session | null;
}

const NavbarComponent = ({navbar, session}: IProps) => {
    return <NavbarContextProvider navbar={navbar} session={session}>
        <Navbar/>
    </NavbarContextProvider>
}

export default NavbarComponent;