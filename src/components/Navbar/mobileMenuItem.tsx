'use client';
import {useState} from "react";
import clsx from "clsx";
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import MobileMenuItemSub from "./mobileMenuItemSub";
import {useNavbarContext} from "./context";


interface IProps {
    link: IBlogNavbarLink;
}

const MobileMenuItem = ({link}: IProps) => {
    const {siteConfig, closeMobileMenu, isCurrentPage, getAriaCurrent, toggleMobileSubMenu, mobileSubMenuOpenIds} = useNavbarContext();
    

    return (
        <li key={link.url}
            className='mb-0'>
            {
                link.links && link.links.length > 0
                    ? (
                        <>
                            <button
                                className={
                                    clsx(
                                        'text-center text-white ' +
                                        'w-full ' +
                                        'block relative ' +
                                        'transition-all ' +
                                        'p-2 ',
                                        {
                                            ['border-b-[1px] border-bg-white']: !mobileSubMenuOpenIds.includes(link.id),
                                            ['bg-site-green']: !isCurrentPage(link.url) || (isCurrentPage(link.url) && mobileSubMenuOpenIds.includes(link.id)),
                                            ['bg-site-brown']: isCurrentPage(link.url) && !mobileSubMenuOpenIds.includes(link.id)
                                        }
                                    )}
                                onClick={() => toggleMobileSubMenu(link.id)}
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
                                            ['rotate-180']: mobileSubMenuOpenIds.includes(link.id)
                                        })
                                }/>
                            </button>
                            <div className={clsx('flex items-center justify-center ' +
                                'bg-gray-200 ' +
                                'transition-all',
                                {
                                    ['border-b-[1px] border-bg-site-green']: mobileSubMenuOpenIds.includes(link.id),
                                })
                            }
                            >
                                <div className={clsx('w-[80%]')}>
                                    <MobileMenuItemSub id={link.id}
                                                       links={link.links}
                                    />
                                </div>
                            </div>
                        </>
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