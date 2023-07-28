'use client';
import Link from 'next/link';
import {IBlogNavbarLink} from "~/models";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {useMemo, useState} from "react";
import MenuItemSub from "~/components/Navbar/menuItemSub";
import {ClickAwayListener} from '~/providers/clickAwayListener';

interface IProps {
    link: IBlogNavbarLink
}

const MenuItem = ({link}: IProps) => {
    const [open, setOpen] = useState(false);

    const path = usePathname();
    const isCurrentPage = useMemo(() => {
        const url = link.url;
        if (!url) {
            return false;
        }
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
                ? <>
                    <button
                        className={clsx('flex space-x-2 items-center relative ' +
                            'transition-all after:transition-all ' +
                            'text-site-green hover:text-site-brown ' +
                            'border-site-green hover:border-site-brown ' +
                            'after:bg-site-green after:content-[\'\'] after:absolute after:left-0 after:h-[2px] after:w-0 after:bottom-[-2px] ' +
                            'hover:after:bg-site-brown hover:after:w-full',
                            {
                                ['after:bg-site-brown']: !isCurrentPage,
                                ['after:bg-site-green after:w-full hover:after:bg-site-brown']: isCurrentPage
                            })
                        }
                        onClick={() => setOpen(prev => !prev)}
                        onFocus={() => setOpen(true)}
                    >
                        <span>{link.label}{open.toString()}</span>
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
                        ['after:bg-site-brown']: !isCurrentPage,
                        ['after:bg-site-green after:w-full hover:after:bg-site-brown']: isCurrentPage
                    })}
                    href={link.url as string}
                    aria-current={ariaCurrent}>
                    {link.label}
                </Link>
        }
    </li>
}

export default MenuItem;