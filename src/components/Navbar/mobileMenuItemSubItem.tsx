'use client';
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {useMemo} from "react";

interface IProps {
    link: IBlogNavbarLink
}

const MobileMenuItemSubItem = ({link}: IProps) => {
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


    return <li className={
        clsx('m-0 p-0 border-b-[1px]  last-of-type:border-b-0', {
            ['border-site-brown']: isCurrentPage,
            ['border-site-green']: !isCurrentPage,
        })
    }>
        <Link
            className={
                clsx('text-site-green text-center ' +
                    'px-4 py-2 ' +
                    'w-full ' +
                    'block ' +
                    'transition-all', {
                    ['bg-site-brown text-white font-bold']: isCurrentPage
                })
            }
            href={link.url as string}
            aria-current={ariaCurrent}>
            {link.label}
        </Link>
    </li>
}

export default MobileMenuItemSubItem;