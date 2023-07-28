'use client';
import {useState} from "react";
import clsx from "clsx";
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import MobileMenuItemSub from "./mobileMenuItemSub";
import {ClickAwayListener} from "~/providers/clickAwayListener";
import {useNavbarContext} from "./context";


interface IProps {
    link: IBlogNavbarLink;
}

const MobileMenuItem = ({link}: IProps) => {
    const {siteConfig, closeMobileMenu, isCurrentPage, getAriaCurrent} = useNavbarContext();
    const [open, setOpen] = useState(false);


    return (
        <li key={link.url}
            className='mb-0'>
            {
                link.links && link.links.length > 0
                    ? (
                        <ClickAwayListener onClickAway={() => setOpen(false)}>
                            <button
                                className={
                                    clsx(
                                        'text-center text-white ' +
                                        'w-full ' +
                                        'block relative ' +
                                        'transition-all ' +
                                        'p-2 ',
                                        {
                                            ['border-b-[1px] border-bg-white']: !open,
                                            ['bg-site-green']: !isCurrentPage(link.url) || (isCurrentPage(link.url) && open),
                                            ['bg-site-brown']: isCurrentPage(link.url) && !open
                                        }
                                    )}
                                onClick={() => setOpen(prev => !prev)}
                                aria-label={
                                    ((open ? siteConfig.collapseSubMenuText : siteConfig.expandSubMenuText) || '' as string).replace("%d", link.label)
                                }>
                                <span>{link.label}</span>
                                <div className={
                                    clsx('absolute right-6 top-[50%] translate-y-[-50%] ' +
                                        'h-0 w-0 ' +
                                        'border-x-[6px] border-x-transparent border-t-[10px] border-[inherit] ' +
                                        'transition-all',
                                        {
                                            ['rotate-180']: open
                                        })
                                }/>
                            </button>
                            <div className={clsx('flex items-center justify-center ' +
                                'bg-gray-200 ' +
                                'transition-all',
                                {
                                    ['border-b-[1px] border-bg-site-green']: open,
                                })
                            }
                            >
                                <div className={clsx('w-[80%]')}>
                                    <MobileMenuItemSub open={open}
                                                       setClose={() => {
                                                           closeMobileMenu();
                                                           setOpen(false);
                                                       }}
                                                       links={link.links}
                                    />
                                </div>
                            </div>
                        </ClickAwayListener>
                    )
                    : (
                        <Link
                            className={
                                clsx(
                                    'text-center text-white hover:text-white ' +
                                    'after:w-0 hover:after:w-0 ' +
                                    'hover:bg-site-brown ' +
                                    'block p-2 ' +
                                    'border-b-[1px] border-white ',
                                    {
                                        ['bg-site-green']: !isCurrentPage(link.url),
                                        ['bg-site-brown font-bold']: isCurrentPage(link.url)
                                    }
                                )}
                            onClick={closeMobileMenu}
                            href={link.url}
                            aria-current={getAriaCurrent(link.url)}>
                            {link.label}
                        </Link>
                    )
            }
        </li>
    )
}

export default MobileMenuItem;