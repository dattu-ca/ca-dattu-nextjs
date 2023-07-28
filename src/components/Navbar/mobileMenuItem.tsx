'use client';
import {useMemo, useState} from "react";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import MobileMenuItemSub from "~/components/Navbar/mobileMenuItemSub";
import {ClickAwayListener} from "~/providers/clickAwayListener";


interface IProps {
    link: IBlogNavbarLink,
    setClose: () => void,
}

const MobileMenuItem = ({link, setClose}: IProps) => {
    const [open, setOpen] = useState(true);
    const path = usePathname();
    const isCurrentPage = useMemo(() => {
        const url = link.url;
        if (url === '/') {
            return path === url;
        }
        return path.includes(url)
    }, [link.url, path]);
    const ariaCurrent = useMemo(() => isCurrentPage ? 'page' : undefined, [isCurrentPage])


    return <li key={link.url}
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
                                        ['bg-site-green']: !isCurrentPage || (isCurrentPage && open),
                                        ['bg-site-brown']: isCurrentPage && !open
                                    }
                                )}
                            onClick={() => setOpen(prev => !prev)}>
                            <span>{link.label}</span>
                            <div className={
                                clsx('absolute right-6 top-[50%] translate-y-[-50%] ' +
                                    'h-0 w-0 ' +
                                    'border-x-[6px] border-x-transparent border-t-[10px] border-[inherit] ' +
                                    'transition-all', {
                                    ['rotate-180']: open
                                })
                            }/>
                        </button>
                        <div className={clsx('flex items-center justify-center bg-gray-200',
                            {
                                ['border-b-[1px] border-bg-site-green']: open,
                            })
                        }
                        >
                            <div className={clsx('w-[80%]')}>
                                <MobileMenuItemSub open={open}
                                                   setClose={() => {
                                                       setClose();
                                                       setOpen(false)
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
                                'text-center text-white hover:text-white after:w-0 hover:after:w-0  hover:bg-site-brown block border-b-[1px] border-white p-2',
                                {
                                    ['bg-site-green']: !isCurrentPage,
                                    ['bg-site-brown font-bold']: isCurrentPage
                                }
                            )}
                        onClick={setClose}
                        href={link.url}
                        aria-current={ariaCurrent}>
                        {link.label}
                    </Link>
                )
        }
    </li>
}

export default MobileMenuItem;