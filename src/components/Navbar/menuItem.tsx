'use client';
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import {useState} from "react";
import {ClickAwayListener} from '~/providers/clickAwayListener';
import MenuItemSub from "./menuItemSub";
import {useNavbarContext} from "./context";

interface IProps {
    link: IBlogNavbarLink;
}

const MenuItem = ({link}: IProps) => {
    const {
        isCurrentPage,
        getAriaCurrent,
        desktopSubMenuOpenId,
        toggleDesktopSubMenu,
        openDesktopSubMenu,
        closeDesktopSubMenu
    } = useNavbarContext();

    return (
        <li key={link.url}
            className='mb-0'>
            {
                link.links && link.links.length > 0
                    ? <ClickAwayListener onClickAway={closeDesktopSubMenu}>
                        <button
                            className={clsx(
                                'flex space-x-2 items-center relative ' +
                                'transition-all after:transition-all ' +
                                'text-site-green hover:text-site-brown ' +
                                'hover:border-site-brown ' +
                                ' ' +
                                'hover:after:bg-site-brown ' +
                                'hover:after:w-full ' +
                                'after:content-[\'\'] after:absolute after:left-0 after:h-[2px] after:w-0 after:bottom-0 ',
                                {
                                    ['after:bg-site-brown']: !isCurrentPage(link.url) || (isCurrentPage(link.url) && desktopSubMenuOpenId === link.id),
                                    ['after:w-full hover:after:bg-site-brown']: isCurrentPage(link.url),
                                    ['after:bg-site-green'] : isCurrentPage(link.url) && desktopSubMenuOpenId !== link.id,
                                    ['border-site-green after:bg-site-green']: desktopSubMenuOpenId !== link.id,
                                    ['text-site-brown border-site-brown after:bg-site-brown after:w-full']: desktopSubMenuOpenId === link.id
                                })
                            }
                            onClick={() => toggleDesktopSubMenu(link.id)}
                            onFocus={() => openDesktopSubMenu(link.id)}
                            onMouseOver={() => openDesktopSubMenu(link.id)}
                        >
                            <span>{link.label}</span>
                            <div className={
                                clsx('h-0 w-0 border-x-[6px] border-x-transparent border-t-[10px] border-[inherit] transition-all', {
                                    ['rotate-180']: desktopSubMenuOpenId === link.id
                                })
                            }/>
                        </button>
                        <div className='pt-2 absolute'>
                            <MenuItemSub id={link.id} links={link.links}/>
                        </div>
                    </ClickAwayListener>
                    : <Link
                        className={clsx('text-site-green hover:text-site-brown', {
                            ['after:bg-site-brown']: !isCurrentPage(link.url),
                            ['after:bg-site-green after:w-full hover:after:bg-site-brown']: isCurrentPage(link.url)
                        })}
                        href={link.url as string}
                        aria-current={getAriaCurrent(link.url)}
                        onFocus={closeDesktopSubMenu}
                        onMouseOver={closeDesktopSubMenu}>
                        {link.label}
                    </Link>
            }
        </li>
    )
}

export default MenuItem;