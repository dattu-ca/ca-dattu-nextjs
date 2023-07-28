'use client';
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import {useNavbarContext} from "./context";

interface IProps {
    link: IBlogNavbarLink;
}

const MobileMenuItemSubItem = ({link}: IProps) => {
    const {isCurrentPage, getAriaCurrent} = useNavbarContext();

    return (
        <li className={
            clsx(
                'm-0 p-0 ' +
                'border-b-[1px] last-of-type:border-b-0', {
                ['border-site-brown']: isCurrentPage(link.url),
                ['border-site-green']: !isCurrentPage(link.url),
            })
        }>
            <Link
                className={
                    clsx('text-site-green text-center ' +
                        'px-4 py-2 ' +
                        'w-full ' +
                        'block ' +
                        'transition-all', {
                        ['bg-site-brown text-white font-bold']: isCurrentPage(link.url)
                    })
                }
                href={link.url as string}
                aria-current={getAriaCurrent(link.url)}>
                {link.label}
            </Link>
        </li>
    )
}

export default MobileMenuItemSubItem;