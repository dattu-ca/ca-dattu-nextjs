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
        className=className={clsx()}
        onMouseOut={() => closeSubMenu(null)}
    >
        <li className={clsx()}>
            <Link
                href={'/auth/login'}>
                Login
            </Link>
        </li>
        {
            links.map(link => (
                <li key={link.id}
                    className={clsx()}
                    onMouseOver={() => openSubMenu(link.id)}
                >
                    <ClickAwayListener onClickAway={() => ({})}>
                        <div>
                            <div className={clsx()}>
                                <Link
                                    aria-current={getAriaCurrent(link.url)}
                                    href={link.url}
                                    className={clsx()}>
                                    {link.label}
                                </Link>
                                {
                                    Array.isArray(link?.links) && link.links.length > 0 &&
                                    <button onClick={() => toggleSubMenu(link.id)}
                                            aria-label={subMenuOpenId === link.id ? `Close sub menu for ${link.label}` : `Open sub menu for ${link.label}`}>
                                        <AiOutlineDown className={clsx()}/>
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