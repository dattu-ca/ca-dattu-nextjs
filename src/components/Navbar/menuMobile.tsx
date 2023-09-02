import React from 'react';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';

import {useNavbarContext} from "./context";
import clsx from "clsx";
import Link from "next/link";
import {ReactIcon} from "~/components/ReactIcon";

const MenuMobile = () => {
    const {
        navbar,
        getAriaCurrent,
        isCurrentPage,
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
    } = useNavbarContext();


    return <ClickAwayListener onClickAway={closeMobileMenu}>
        <div className={clsx(
            ' relative'
        )}>
            <button onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? navbar.closeMenuText : navbar.openMenuText}>
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
                'fixed right-0 w-full h-[calc(100vh-62px)] bg-site-color-dark shadow-2xl',
                'overflow-y-auto',
                {
                    ['top-[62px]']: isMobileMenuOpen,
                    ['top-[100%]']: !isMobileMenuOpen
                }
            )}
                 style={{'--tw-bg-opacity': 0.95} as React.CSSProperties}>
                <ul className={clsx(
                    'm-0 p-0',
                    'flex justify-start items-start flex-col',
                    'list-none '
                )}>
                    {
                        (navbar.links?.links || []).map(link => (
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

            </div>

        </div>
    </ClickAwayListener>
}

export {MenuMobile};