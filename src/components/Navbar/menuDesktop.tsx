import React from 'react';
import {useNavbarContext} from "./context";
import clsx from "clsx";
import Link from "next/link";

const MenuDesktop = () => {
    const {navbar, getAriaCurrent, isCurrentPage} = useNavbarContext();
    return <ul className={clsx(
        'm-0 p-0',
        'flex justify-end items-center ',
        'list-none '
    )}>
        {
            navbar.links.links.map(link => (
                <li key={link.id}
                    className={clsx(
                        'm-0 p-0'
                    )}>
                    <Link
                        aria-current={getAriaCurrent(link.url)}
                        href={link.url}
                        className={clsx(
                            'text-site-primary',
                            'text-xl',
                            'ml-6',
                            'hover:scale-150',
                            {
                                ['after:w-full']: isCurrentPage(link.url)
                            }
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

export {MenuDesktop};