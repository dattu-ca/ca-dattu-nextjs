'use client';
import React, {Fragment} from 'react';
import clsx from "clsx";
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import Link from "next/link";
import {useNavbarContext} from "../context";
import {AiOutlineDown} from 'react-icons/ai';
import {MenuDesktopSubmenu} from "~/components/Navbar/desktop/menuDesktopSubmenu";
import {ILink} from "~/models";


const MenuDesktop = () => {
    const {
        ctxData: {
            links,
            subMenuOpenId
        },
        ctxFunctions: {
            getAriaCurrent,
            isCurrentPage,
            openSubMenu,
            closeSubMenu,
            toggleSubMenu
        }
    } = useNavbarContext();
    return <ul
        className={clsx(
            'm-0 p-0',
            'flex justify-end items-center gap-4',
            'list-none '
        )}
        onMouseOut={() => closeSubMenu(null)}
    >
        <li className={clsx(
            'm-0 p-0'
        )}>
            <Link
                href={'/auth/login'}>
                Login
            </Link>
        </li>
        {
            links.map(link => (
                <li key={link.id}
                    className={clsx(
                        'm-0 p-0',
                        'relative',
                    )}
                    onMouseOver={() => openSubMenu(link.id)}
                >
                    <ClickAwayListener onClickAway={() => ({})}>
                        <div>
                            <div className={clsx(
                                'flex gap-2 items-center'
                            )}>
                                <Link
                                    aria-current={getAriaCurrent(link.url)}
                                    href={link.url}
                                    className={clsx(
                                        'block',
                                        'text-site-primary',
                                        'text-xl',
                                        {
                                            ['after:w-full']: isCurrentPage(link.url)
                                        }
                                    )}>
                                    {link.label}
                                </Link>
                                {
                                    Array.isArray(link?.links) && link.links.length > 0 &&
                                    <button onClick={() => toggleSubMenu(link.id)}
                                            aria-label={subMenuOpenId === link.id ? `Close sub menu for ${link.label}` : `Open sub menu for ${link.label}`}>
                                        <AiOutlineDown className={clsx(
                                            'transition',
                                            'w-4 h-4 text-site-primary ',
                                            {
                                                ['rotate-180']: subMenuOpenId === link.id
                                            }
                                        )}
                                        />
                                    </button>
                                }
                            </div>
                            {
                                Array.isArray(link?.links) && link.links.length > 0
                                && <MenuDesktopSubmenu id={link.id} links={link.links as ILink[]}/>
                            }
                        </div>
                    </ClickAwayListener>
                </li>
            ))
        }
    </ul>
}

export {MenuDesktop};