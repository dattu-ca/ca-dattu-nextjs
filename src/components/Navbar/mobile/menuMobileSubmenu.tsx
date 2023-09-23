import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {useNavbarContext} from "../context";
import {ILink} from "~/models";

interface IProps {
    id: string;
    links: ILink[]
}

const MenuMobileSubmenu = ({id, links}: IProps) => {
    const {ctxData: {subMenuOpenId}, ctxFunctions: {isCurrentPage, getAriaCurrent, closeMobileMenu}} = useNavbarContext();
    const isOpen = id === subMenuOpenId

    return <div className={clsx('bg-black')}>
        <ul className={clsx(
            'list-none p-0 m-0 pl-8',
            {
                ['h-0 overflow-hidden']: !isOpen,
                ['h-full']: isOpen
            }
        )}>
            {
                links.map(link => (
                    <li key={link.label}
                        className={clsx(
                            'm-0 p-0',
                            'w-full',
                            'border-b-[1px] border-b-site-primary border-solid',
                            'last:border-b-0'
                        )}>
                        <Link href={link.url}
                              tabIndex={isOpen ? undefined : -1}
                              aria-current={getAriaCurrent(link.url)}
                              onClick={() => closeMobileMenu()}
                              className={clsx(
                                  'text-site-primary',
                                  'text-xl',
                                  'p-2 block',
                                  'grow',
                                  'border-l-[8px]',
                                  {
                                      ['border-l-site-primary']: isCurrentPage(link.url),
                                      ['border-l-[transparent]']: !isCurrentPage(link.url)
                                  }
                              )}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
}

export {MenuMobileSubmenu};