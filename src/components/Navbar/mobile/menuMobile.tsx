import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import {AiOutlineClose, AiOutlineDown} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'
import {useNavbarContext} from "../context";
import {MenuLoggedInMobile} from "./menuLoggedInMobile";
import {MenuMobileSubmenu} from "./menuMobileSubmenu";

const MenuMobile = () => {
    const {
        ctxData: {
            openMenuText,
            closeMenuText,
            links,
            isMobileMenuOpen,
            session,
            subMenuOpenId,
        },
        ctxFunctions: {
            getAriaCurrent,
            isCurrentPage,
            toggleMobileMenu,
            closeMobileMenu,
            toggleSubMenu,
        }
    } = useNavbarContext();

    return <ClickAwayListener onClickAway={closeMobileMenu}>
        <div className={clsx(
            ' relative'
        )}>
            <button onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? closeMenuText : openMenuText}>
                {
                    isMobileMenuOpen
                        ? (
                            <AiOutlineClose className={clsx('h-6 w-6 text-site-primary')}/>
                        )
                        : (
                            <GiHamburgerMenu className={clsx('h-6 w-6 text-site-primary')}/>
                        )

                }
            </button>

            <div className={clsx(
                'transition-all ',
                'fixed right-0 w-full h-[calc(100vh-72px)] bg-site-color-dark shadow-2xl',
                'overflow-y-auto',
                {
                    ['top-[72px]']: isMobileMenuOpen,
                    ['top-[100%]']: !isMobileMenuOpen
                }
            )}
                 style={{'--tw-bg-opacity': 0.95} as React.CSSProperties}>
                <div className={clsx(
                    'w-full h-full',
                    'flex flex-col justify-between'
                )}>
                    <ul className={clsx(
                        'm-0 p-0',
                        'flex justify-start items-start flex-col',
                        'list-none '
                    )}>
                        {
                            links.map(link => (
                                <li key={link.id}
                                    className={clsx(
                                        'm-0 p-0',
                                        'w-full',
                                        'border-b-[1px] border-b-site-primary border-solid',
                                    )}>
                                    <div className={clsx(
                                        'flex w-full',
                                        'block',
                                        'bg-site-color-dark',
                                    )}>
                                        <Link
                                            onClick={closeMobileMenu}
                                            aria-current={getAriaCurrent(link.url)}
                                            href={link.url}
                                            className={clsx(
                                                'text-site-primary',
                                                'text-xl',
                                                'p-4',
                                                'grow',
                                                'border-l-[16px]',
                                                {
                                                    ['border-l-site-primary']: isCurrentPage(link.url),
                                                    ['border-l-[transparent]']: !isCurrentPage(link.url)
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
                                                    'p-4',
                                                    'bg-gray-700'
                                                )}
                                                onClick={() => toggleSubMenu(link.id)}
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
                                        && <MenuMobileSubmenu links={link.links} id={link.id}/>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    {
                        session && (
                            <div>
                                <MenuLoggedInMobile/>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    </ClickAwayListener>
}

export {MenuMobile};