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
        openMobileMenu,
        closeMobileMenu,
        siteConfig,
    } = useNavbarContext();


    return <ClickAwayListener onClickAway={closeMobileMenu}>
        <div className={clsx(
            ' relative'
        )}>
            <button onClick={openMobileMenu}
                    aria-label={siteConfig.openMenuText}>
                <ReactIcon icon='GiHamburgerMenu'
                           className={clsx('h-6 w-6 text-site-primary')}

                />
            </button>

            <div className={clsx(
                'transition-all ',
                'fixed top-0 right-0 w-[90vw] h-[100vh] bg-site-color-dark shadow-2xl',
                {
                    ['right-0']: isMobileMenuOpen,
                    ['right-[-100%]']: !isMobileMenuOpen
                }
            )}>
                <div className={clsx(
                    'mt-4 mr-4 text-right'
                )}>
                    <button onClick={closeMobileMenu}
                            aria-label={siteConfig.closeMenuText}>
                        <ReactIcon icon='AiOutlineClose'
                                   className={clsx('h-6 w-6 text-site-primary')}

                        />
                    </button>
                </div>
                <ul className={clsx(
                    'm-0 p-0',
                    'flex justify-start items-start flex-col',
                    'list-none '
                )}>
                    {
                        navbar.navLinks.map(link => (
                            <li key={link.id}
                                className={clsx(
                                    'm-0 p-4',
                                    'w-full',
                                    'border-b-[1px] border-b-site-primary border-solid',
                                )}>
                                <Link
                                    onClick={closeMobileMenu}
                                    aria-current={getAriaCurrent(link.url)}
                                    href={link.url}
                                    className={clsx(
                                        'inline-block',
                                        'text-site-primary',
                                        'bg-site-color-dark',
                                        'text-xl',

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

            </div>

        </div>
    </ClickAwayListener>
}

export {MenuMobile};