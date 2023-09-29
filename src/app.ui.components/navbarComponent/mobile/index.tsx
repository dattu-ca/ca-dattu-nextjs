import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import {useNavbarContext} from "../context";
import {MenuMobileSubmenu} from "./subMenu";
import {FaCaretDown} from "react-icons/fa6";
import {ClickAwayListener} from "@mui/base";

const MenuMobile = () => {
    const {
        ctxData: {
            openMenuText,
            closeMenuText,
            links,
            isMobileMenuOpen,
            authLinks,
            mobileSubMenuOpenIds,
        },
        ctxFunctions: {
            getAriaCurrent,
            isCurrentPage,
            toggleMobileMenu,
            closeMobileMenu,
            toggleMobileSubMenu,
        }
    } = useNavbarContext();

    return <div>
        <ClickAwayListener onClickAway={closeMobileMenu}
                           mouseEvent="onMouseDown"
                           touchEvent="onTouchStart">
            <div role="menubar">
                <button
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? closeMenuText : openMenuText}
                    className={clsx(
                        'flex items-center justify-center gap-2',
                        'group rounded-2xl px-3 pt-2 pb-2 shadow-lg shadow-zinc-800/5 backdrop-blur transition',
                        'bg-white/90 ring-1 ring-zinc-900/5',
                        'dark:bg-zinc-800/90 dark:ring-white/10 focus:hover:ring-white/20'
                    )}
                >
                    <span>Menu</span>
                    <div className={clsx(
                        'inline-grid',
                    )}>
                        <FaTimes
                            className={clsx(
                                'transition duration-250 col-start-1 row-start-1',
                                {
                                    ['opacity-1 rotate-0']: isMobileMenuOpen,
                                    ['opacity-0 rotate-45']: !isMobileMenuOpen
                                }
                            )}
                        />
                        <GiHamburgerMenu
                            className={clsx(
                                'transition duration-250 col-start-1 row-start-1',
                                {
                                    ['opacity-1 rotate-0']: !isMobileMenuOpen,
                                    ['opacity-0 rotate-45']: isMobileMenuOpen
                                }
                            )}
                        />
                    </div>
                </button>

                <div
                    role="menu"
                    className={clsx(
                        'z-50',
                        'absolute w-full top-full left-0 translate-y-2',
                        'group rounded-xl shadow-lg shadow-zinc-800/5 backdrop-blur transition',
                        'bg-white/90 ring-zinc-900/5',
                        'dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
                        {
                            ['ring-1']: isMobileMenuOpen,
                            ['h-0 overflow-hidden ring-0']: !isMobileMenuOpen
                        }
                    )}
                    style={{'--tw-bg-opacity': 0.95} as React.CSSProperties}>
                    <div className={clsx(
                        'p-8'
                    )}>
                        <div className={clsx(
                            'py-4',
                            'flex justify-space-between items-center',
                        )}>
                        <span className={clsx(
                            'flex-1 text-left',
                            'text-slate-500'
                        )}>
                            Navigation
                        </span>
                            <button onClick={closeMobileMenu}
                                    tabIndex={isMobileMenuOpen ? undefined : -1}>
                                <FaTimes
                                    className={clsx(
                                        'transition duration-250 col-start-1 row-start-1',
                                        {
                                            ['opacity-1 rotate-0']: isMobileMenuOpen,
                                            ['opacity-0 rotate-45']: !isMobileMenuOpen
                                        }
                                    )}
                                />
                            </button>

                        </div>
                        <ul className={clsx(
                            'flex flex-col',
                        )}>
                            {
                                links.map(link => (
                                    <li key={link.id}
                                        className={clsx(
                                            'w-full',
                                            'border-b-[1px] last-of-type:border-b-0',
                                            'border-zinc-900/5',
                                            'dark:border-white/10'
                                        )}>
                                        <div className={clsx(
                                            'flex justify-space-between gap-2'
                                        )}>
                                            <Link
                                                onClick={closeMobileMenu}
                                                aria-current={getAriaCurrent(link.url)}
                                                href={link.url}
                                                className={clsx(
                                                    'flex-1',
                                                    'relative block px-3 py-4 transition hover:text-teal-500 dark:hover:text-teal-400',
                                                    {
                                                        ['text-teal-500 dark:text-teal-400']: isCurrentPage(link.url)
                                                    }
                                                )}
                                                tabIndex={isMobileMenuOpen ? undefined : -1}
                                            >
                                                {link.label}
                                            </Link>
                                            {
                                                Array.isArray(link?.links) && link.links.length > 0 &&
                                                <button
                                                    className={clsx(
                                                        'px-4'
                                                    )}
                                                    onClick={() => toggleMobileSubMenu(link.id)}
                                                    aria-label={mobileSubMenuOpenIds.includes(link.id) ? `Close sub menu for ${link.label}` : `Open sub menu for ${link.label}`}
                                                    tabIndex={isMobileMenuOpen ? undefined : -1}>

                                                    <FaCaretDown className={clsx(
                                                        'transition',
                                                        {
                                                            ['rotate-180']: mobileSubMenuOpenIds.includes(link.id)
                                                        }
                                                    )}/>

                                                </button>
                                            }
                                        </div>
                                        {
                                            Array.isArray(link?.links) && link.links.length > 0
                                            && <MenuMobileSubmenu links={link.links} id={link.id}/>
                                        }
                                    </li>
                                ))
                            }
                            <li className={clsx(
                                'w-full',
                                'border-b-[1px] last-of-type:border-b-0',
                                'border-zinc-900/5',
                                'dark:border-white/10',
                            )}>
                                <div>
                                    <button
                                        onClick={() => toggleMobileSubMenu('authMenu')}
                                        className={clsx(
                                            'w-full',
                                            'flex gap-2 justify-space-between items-center',
                                            'relative block px-3 py-4 transition hover:text-teal-500 dark:hover:text-teal-400',
                                        )}
                                        aria-label={mobileSubMenuOpenIds.includes('authMenu') ? `Close sub menu for User Management` : `Open sub menu for User Management`}
                                        tabIndex={isMobileMenuOpen ? undefined : -1}
                                    >
                                    <span className={clsx(
                                        'flex-1',
                                        'text-left'
                                    )}>Profile</span>
                                        <FaCaretDown className={clsx(
                                            'transition',
                                            {
                                                ['rotate-180']: mobileSubMenuOpenIds.includes('authMenu')
                                            }
                                        )}/>
                                    </button>
                                </div>
                                <MenuMobileSubmenu links={authLinks} id={'authMenu'}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ClickAwayListener>

        <div className={clsx(
            'transition',
            {
                ['fixed inset-0 z-40 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100']: isMobileMenuOpen
            }
        )}></div>
    </div>
}

export {MenuMobile};