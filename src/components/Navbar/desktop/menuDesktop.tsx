import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {useNavbarContext} from "../context";

const MenuDesktop = () => {
    const {
        ctxData: {
            links
        },
        ctxFunctions: {
            getAriaCurrent,
            isCurrentPage
        }
    } = useNavbarContext();
    return <ul className={clsx(
        'm-0 p-0',
        'flex justify-end items-center gap-4',
        'list-none '
    )}>
        {
            links.map(link => (
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