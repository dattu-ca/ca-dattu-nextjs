'use client';
import {ISiteNavbar} from "~/models";
import {NavbarContextProvider} from './context';
import {Navbar} from './navbar';
import {Session} from "next-auth";

interface IProps {
    navbar: ISiteNavbar;
    session: Session | null;
}

const NavbarComponent = ({navbar, session}: IProps) => {
    return <NavbarContextProvider navbar={navbar} session={session}>
        <Navbar/>
    </NavbarContextProvider>
}

export default NavbarComponent;