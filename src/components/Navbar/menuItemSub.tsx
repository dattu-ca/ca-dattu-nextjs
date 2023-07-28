'use client';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import MenuItemSubItem from "~/components/Navbar/menuItemSubItem";

interface IProps {
    links: IBlogNavbarLink[];
    open: boolean;
    setClose: () => void;
}

const MenuItemSub = ({links, open, setClose}: IProps) => {
    return (
        <ul
            className={
                clsx('list-none p-0 m-0 ' +
                    'border-site-green border-t-[1px] ' +
                    'bg-white ' +
                    'drop-shadow-lg',
                    {
                        'hidden': !open
                    })
            }
            onClick={setClose}
        >
            {links.map(link => <MenuItemSubItem key={link.url} link={link}/>)}
        </ul>
    )
}

export default MenuItemSub;