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
    const {isCurrentPage, getAriaCurrent} = useNavbarContext();
    const [open, setOpen] = useState(false);


    return (
        <li key={link.url}
            className='mb-0'>
            {
                link.links && link.links.length > 0
                    ? <>
                        <button
                            className={clsx('flex space-x-2 items-center relative ' +
                                'transition-all after:transition-all ' +
                                'text-site-green hover:text-site-brown ' +
                                'border-site-green hover:border-site-brown ' +
                                'after:bg-site-green after:content-[\'\'] after:absolute after:left-0 after:h-[2px] after:w-0 after:bottom-[-4px] ' +
                                'hover:after:bg-site-brown hover:after:w-full',
                                {
                                    ['after:bg-site-brown']: !isCurrentPage(link.url),
                                    ['after:bg-site-green after:w-full hover:after:bg-site-brown']: isCurrentPage(link.url)
                                })
                            }
                            onClick={() => setOpen(prev => !prev)}
                            onFocus={() => setOpen(true)}
                        >
                            <span>{link.label}</span>
                            <div className={
                                clsx('h-0 w-0 border-x-[6px] border-x-transparent border-t-[10px] border-[inherit] transition-all', {
                                    ['rotate-180']: open
                                })
                            }/>
                        </button>
                        <div className='pt-2 absolute'>
                            <ClickAwayListener onClickAway={() => setOpen(false)}>
                                <MenuItemSub links={link.links} open={open} setClose={() => setOpen(false)}/>
                            </ClickAwayListener>
                        </div>
                    </>
                    : <Link
                        className={clsx('text-site-green hover:text-site-brown', {
                            ['after:bg-site-brown']: !isCurrentPage(link.url),
                            ['after:bg-site-green after:w-full hover:after:bg-site-brown']: isCurrentPage(link.url)
                        })}
                        href={link.url as string}
                        aria-current={getAriaCurrent(link.url)}>
                        {link.label}
                    </Link>
            }
        </li>
    )
}

export default MenuItem;