'use client';
import {SiteNavbar} from "~/models";
import {NavbarContextProvider} from './context';
import {Navbar} from './navbar';
import {Session} from "next-auth";

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