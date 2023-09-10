import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import {ReactIcon} from "~/components/ReactIcon";
import {useNavbarContext} from "../context";
import {MenuLoggedInMobile} from "./menuLoggedInDesktop";

const MenuMobile = () => {
    const {
        ctxData: {
            openMenuText,
            closeMenuText,
            links,
            isMobileMenuOpen,
        },
        ctxFunctions: {
            getAriaCurrent,
            isCurrentPage,
            toggleMobileMenu,
            closeMobileMenu,
        }
    } = useNavbarContext();
    


    return <ClickAwayListener onClickAway={closeMobileMenu}>
        <div className={clsx(
            ' relative'
        )}>
            <button>H</button>
            <button onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? closeMenuText : openMenuText}>
                {
                    isMobileMenuOpen
                        ? (
                            <ReactIcon icon='AiOutlineClose'
                                       className={clsx('h-6 w-6 text-site-primary')}

                            />
                        )
                        : (
                            <ReactIcon icon='GiHamburgerMenu'
                                       className={clsx('h-6 w-6 text-site-primary')}
                            />
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
                                    <Link
                                        onClick={closeMobileMenu}
                                        aria-current={getAriaCurrent(link.url)}
                                        href={link.url}
                                        className={clsx(
                                            'p-4',
                                            'block',
                                            'text-site-primary',
                                            'bg-site-color-dark',
                                            'text-xl',
                                            'border-l-[16px]',

                                            {
                                                ['border-l-site-primary']: isCurrentPage(link.url),
                                                ['border-l-[transparent]']: !isCurrentPage(link.url)
                                            }
                                        )}
                                        tabIndex={isMobileMenuOpen ? undefined : -1}
                                    >
                                        {link.label}
                                        <span></span>
                                        <span></span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div>
                        <MenuLoggedInMobile />
                    </div>
                </div>
            </div>

        </div>
    </ClickAwayListener>
}

export {MenuMobile};