'use client';
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import {useNavbarContext} from "./context";

interface IProps {
    link: IBlogNavbarLink;
}

const MenuItemSubItem = ({link}: IProps) => {
    const {isCurrentPage, getAriaCurrent} = useNavbarContext();


    return <li className='m-0 p-0'>
        <Link
            className={
                clsx('text-site-green px-4 py-2 w-full block hover:text-white hover:bg-site-brown hover:after:w-0 border-site-green hover:border-site-brown border-b-[1px] border-x-[1px] transition-all', {
                    ['after:bg-site-brown']: !isCurrentPage(link.url),
                    ['bg-site-green text-white font-bold']: isCurrentPage(link.url)
                })
            }
            href={link.url as string}
            aria-current={getAriaCurrent(link.url)}>
            {link.label}
        </Link>
    </li>
}

export default MenuItemSubItem;