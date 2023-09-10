'use client'
import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {useNavbarContext} from "../context";


const MenuLoggedInMobile = () => {
    const {
        ctxData: {
            authLinks,
        },
        ctxFunctions:{
            isCurrentPage,
            getAriaCurrent,
        }
    } = useNavbarContext();
    
    
    
    
    return (
        <ul className={clsx(
            'm-0 p-2 px-4',
            'flex justify-between items-center gap-4',
            'list-none ',
            'bg-site-color-dark'
        )}>
            {
                authLinks.map(link => (
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

export {MenuLoggedInMobile};