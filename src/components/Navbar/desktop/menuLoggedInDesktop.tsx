'use client'
import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {useNavbarContext} from "../context";


const MenuLoggedInDesktop = () => {
    const {
        ctxData: {
            session,
        },
        ctxFunctions:{
            isCurrentPage,
            getAriaCurrent,
        }
    } = useNavbarContext();
    
    const links = [
        {
            url: '/dashboard',
            label: 'Dashboard'
        },
        {
            url: '/profile',
            label: 'Profile'
        },
        {
            url: '/api/auth/signout',
            label: 'Signout'
        }
    ];
    
    
    return (
        <ul className={clsx(
            'm-0 p-0',
            'flex justify-end items-center gap-4',
            'list-none '
        )}>
            {
                links.map(link => (
                    <li key={link.label}>
                        <Link aria-current={getAriaCurrent(link.url)}      
                              href={link.url}
                              className={clsx(
                                  'text-site-primary',
                                  'text-sm',
                                  'hover:scale-150',
                                  {
                                      ['after:w-full']: isCurrentPage(link.url)
                                  }
                              )}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export {MenuLoggedInDesktop};