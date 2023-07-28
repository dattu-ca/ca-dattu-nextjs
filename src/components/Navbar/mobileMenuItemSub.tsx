'use client';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import MobileMenuItemSubItem from "./mobileMenuItemSubItem";
import {useNavbarContext} from "./context";

interface IProps {
    id: string;
    links: IBlogNavbarLink[];
}

const MobileMenuItemSub = ({id, links}: IProps) => {
    const {mobileSubMenuOpenIds} = useNavbarContext();
    return (
        <ul className={
            clsx(
                'list-none p-0 m-0 transition-all', {
                    'max-h-0 overflow-hidden': !mobileSubMenuOpenIds.includes(id),
                    'max-h-[1000px]': mobileSubMenuOpenIds.includes(id)
                })
        }>
            {links.map(link => <MobileMenuItemSubItem key={link.url} link={link}/>)}
        </ul>
    )
}

export default MobileMenuItemSub;