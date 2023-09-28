import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {useNavbarContext} from "../context";
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

    return <div className={clsx()}>
        <button onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? closeMenuText : openMenuText}>
            {
                isMobileMenuOpen
                    ? (
                        <span>X</span>
                    )
                    : (
                        <span>O</span>
                    )

            }
        </button>

        <div className={clsx()}
             style={{'--tw-bg-opacity': 0.95} as React.CSSProperties}>
            <div className={clsx()}>
                <ul className={clsx()}>
                    {
                        links.map(link => (
                            <li key={link.id}
                                className={clsx()}>
                                <div className={clsx()}>
                                    <Link
                                        onClick={closeMobileMenu}
                                        aria-current={getAriaCurrent(link.url)}
                                        href={link.url}
                                        className={clsx()}
                                        tabIndex={isMobileMenuOpen ? undefined : -1}
                                    >
                                        {link.label}
                                    </Link>
                                    {
                                        Array.isArray(link?.links) && link.links.length > 0 &&
                                        <button
                                            className={clsx()}
                                            onClick={() => toggleSubMenu(link.id)}
                                            aria-label={subMenuOpenId === link.id ? `Close sub menu for ${link.label}` : `Open sub menu for ${link.label}`}>
                                            <span>^</span>
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
            </div>
        </div>

    </div>
}

export {MenuMobile};