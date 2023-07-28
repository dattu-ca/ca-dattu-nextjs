'use client';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import MenuItemSubItem from "./menuItemSubItem";
import {useNavbarContext} from "./context";

interface IProps {
    id: string;
    links: IBlogNavbarLink[];
}

const MenuItemSub = ({links, id}: IProps) => {
    const {desktopSubMenuOpenId, closeDesktopSubMenu} = useNavbarContext();
    return (
        <ul
            className={
                clsx('list-none p-0 m-0 ' +
                    'border-site-green border-t-[1px] ' +
                    'bg-white ' +
                    'drop-shadow-lg',
                    {
                        'hidden': desktopSubMenuOpenId !== id
                    })
            }
            onClick={closeDesktopSubMenu}
        >
            {links.map(link => <MenuItemSubItem key={link.url} link={link}/>)}
        </ul>
    )
}

export default MenuItemSub;