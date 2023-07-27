'use client';
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {useMemo} from "react";

interface IProps {
    link: IBlogNavbarLink
}

const MenuItemSubItem = ({link}: IProps) => {
    const path = usePathname();
    const isCurrentPage = useMemo(() => {
        const url = link.url;
        if (!url) {
            return false;
        }
        if (url === '/') {
            return path === url;
        }
        return path.includes(url)
    }, [link.url, path]);
    const ariaCurrent = useMemo(() => isCurrentPage ? 'page' : undefined, [isCurrentPage])


    return <li className='m-0 p-0'>
        <Link
            className={
                clsx('text-site-green px-4 py-2 w-full block hover:text-white hover:bg-site-brown hover:after:w-0 border-site-green hover:border-site-brown border-b-[1px] border-x-[1px] transition-all', {
                    ['after:bg-site-brown']: !isCurrentPage,
                    ['bg-site-green text-white font-bold']: isCurrentPage
                })
            }
            href={link.url as string}
            aria-current={ariaCurrent}>
            {link.label}
        </Link>
    </li>
}

export default MenuItemSubItem;