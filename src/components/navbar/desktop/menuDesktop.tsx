'use client';
import clsx from "clsx";
import Link from "next/link";
import {ILink} from "~/models";
import {useNavbarContext} from "../context";
import {MenuDesktopSubmenu} from "./menuDesktopSubmenu";


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
        className={clsx()}
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
                                    <span>^</span>
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
    </ul>
}

export {MenuDesktop};