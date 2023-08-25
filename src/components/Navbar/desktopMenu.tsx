import React from 'react';
import {useNavbarContext} from "./context";
import clsx from "clsx";
import Link from "next/link";

const DesktopMenu = () => {
    const {navbar, getAriaCurrent, siteConfig, isCurrentPage} = useNavbarContext();
    return <ul className={clsx(
        'm-0 p-0',
        'flex justify-end items-center ',
        'list-none '
    )}>
        {
            navbar.navLinks.map(link => (
                <li key={link.id}
                    className={clsx(
                        'm-0 p-0'
                    )}>
                    <Link
                        href={link.url}
                        className={clsx(
                            'text-site-primary',
                            'text-xl',
                            'ml-6',
                            'hover:scale-150'
                        )}>
                        {link.label}
                        <span></span>
                        <span></span>
                    </Link>
                </li>
            ))
        }
    </ul>
}

export {DesktopMenu};