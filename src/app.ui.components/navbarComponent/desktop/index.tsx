'use client';
import clsx from "clsx";
import Link from "next/link";
import {FaUserGear, FaCaretDown} from "react-icons/fa6";
import {ILink} from "~/models";
import {useNavbarContext} from "../context";
import {MenuDesktopSubmenu} from "./subMenu";
import {ClickAwayListener} from "@mui/base";


const MenuDesktop = () => {
    const {
        ctxData: {
            links,
            authLinks,
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
    return <ClickAwayListener onClickAway={() => closeSubMenu(null)}
                              mouseEvent="onMouseDown"
                              touchEvent="onTouchStart">
        <ul
            className={clsx(
                'flex',
                'gap-2',
                'rounded-full px-3 text-sm font-medium',
                'shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur',
                'bg-white/90 text-zinc-800 ring-zinc-900/5',
                'dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'
            )}
            onMouseOut={() => closeSubMenu(null)}
        >
            {
                links.map(link => (
                    <li key={link.id}
                        className={clsx(
                            // 'border-r-2',
                            // 'border-zinc-900/5',
                            // 'dark:border-white/10'
                        )}
                        onMouseOver={() => openSubMenu(link.id)}>
                        <div className={clsx(
                            'relative',
                        )}>
                            <div className={clsx(
                                'flex gap-0',
                                'hover:text-teal-500',
                                'dark:hover:text-teal-400',
                            )}>
                                <Link
                                    aria-current={getAriaCurrent(link.url)}
                                    target={link.target}
                                    href={link.url}
                                    className={clsx(
                                        'relative block px-3 py-2 transition ',
                                        {
                                            ['text-teal-500 dark:text-teal-400']: isCurrentPage(link.url)
                                        }
                                    )}>
                                    {link.label}
                                </Link>
                                {
                                    Array.isArray(link?.links) && link.links.length > 0 &&
                                    <button onClick={() => toggleSubMenu(link.id)}
                                            aria-label={subMenuOpenId === link.id ? `Close sub menu for ${link.label}` : `Open sub menu for ${link.label}`}
                                            className={clsx(
                                                'px-1'
                                            )}>
                                        <FaCaretDown className={clsx(
                                            'transition',
                                            {
                                                ['rotate-180']: subMenuOpenId === link.id
                                            }
                                        )}/>
                                    </button>
                                }
                            </div>
                            {
                                Array.isArray(link?.links) && link.links.length > 0
                                && <MenuDesktopSubmenu id={link.id} links={link.links as ILink[]}/>
                            }
                        </div>
                    </li>
                ))
            }
            <li className={clsx()}
                onMouseOver={() => openSubMenu('authMenu')}>
                <div className={clsx(
                    'relative',
                )}>
                    <button
                        className={clsx(
                            'relative block px-3 py-2 transition ',
                            'hover:text-teal-500',
                            'dark:hover:text-teal-400',
                        )}
                        onClick={() => toggleSubMenu('authMenu')}
                        aria-label={subMenuOpenId === 'authMenu' ? `Close sub menu for User Management` : `Open sub menu for User Management`}>
                        <FaUserGear className={clsx(
                            'w-4 h-4'
                        )}/>
                    </button>
                    <MenuDesktopSubmenu id={'authMenu'} links={authLinks}/>
                </div>
            </li>
        </ul>
    </ClickAwayListener>
}

export {MenuDesktop};