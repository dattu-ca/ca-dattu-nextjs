'use client';
import {useMemo} from "react";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";


interface IProps {
    link: IBlogNavbarLink,
    setClose: () => void,
}

const MobileMenuItem = ({link, setClose}: IProps) => {
    const path = usePathname();
    const isCurrentPage = useMemo(() => {
        const url = link.url;
        if (url === '/') {
            return path === url;
        }
        return path.includes(url)
    }, [link.url, path])


    return <li key={link.url}
               className='mb-0'>
        <Link
            className={
                clsx(
                    'text-center text-white hover:text-white after:w-0 hover:after:w-0  hover:bg-site-brown block border-b-[1px] border-white p-2',
                    {
                        ['bg-site-green']: !isCurrentPage,
                        ['bg-site-brown font-bold']: isCurrentPage
                    }
                )}
            onClick={setClose}
            href={link.url}>
            {link.label}
        </Link>
    </li>
}

export default MobileMenuItem;