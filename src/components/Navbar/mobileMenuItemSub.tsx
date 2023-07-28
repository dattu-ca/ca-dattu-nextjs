'use client';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import MobileMenuItemSubItem from "~/components/Navbar/mobileMenuItemSubItem";

interface IProps {
    links: IBlogNavbarLink[];
    open: boolean;
    setClose: () => void;
}

const MobileMenuItemSub = ({links, open, setClose}: IProps) => {


    return <ul
        className={
            clsx('list-none p-0 m-0', {
                'hidden': !open
            })
        }
        onClick={setClose}
    >
        {links.map(link => <MobileMenuItemSubItem key={link.url} link={link}/>)}
    </ul>
}

export default MobileMenuItemSub;