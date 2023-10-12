import React from "react";
import clsx from "clsx";
import {useNavbarContext} from "../context";
import {MenuMobileSubmenu} from "./subMenu";
import Link from "next/link";
import {FaCaretDown} from "react-icons/fa6";

const Menu = () => {
    const {
        ctxData: {
            links,
            isMobileMenuOpen,
            authLinks,
            mobileSubMenuOpenIds,
        },
        ctxFunctions: {
            getAriaCurrent,
            isCurrentPage,
            closeMobileMenu,
            toggleMobileSubMenu,
        }
    } = useNavbarContext();
    return <ul className={clsx(
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
                            target={link.target}
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
}

export {
    Menu
}