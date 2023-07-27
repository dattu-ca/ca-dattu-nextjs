'use client';
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {useMemo} from "react";

interface IProps {
    link: IBlogNavbarLink
}

const MenuItem = ({link}: IProps) => {
    const path = usePathname();
    const isCurrentPage = useMemo(() => {
        const url = link.url;
        if (url === '/') {
            return path === url;
        }
        return path.includes(url)
    }, [link.url, path]);
    const ariaCurrent = useMemo(() => isCurrentPage ? 'page' : undefined, [isCurrentPage])


    return <li key={link.url}
               className='mb-0'>
        <Link
            className={clsx('text-site-green hover:text-site-brown', {
                ['after:bg-site-brown']: !isCurrentPage,
                ['after:bg-site-green after:w-full hover:after:bg-site-brown']: isCurrentPage
            })}
            href={link.url}
            aria-current={ariaCurrent}>
            {link.label}
        </Link>
    </li>
}

export default MenuItem;