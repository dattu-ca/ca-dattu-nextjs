'use client';
import React from "react";
import clsx from 'clsx';
import Link from 'next/link';
import {usePaginationContext} from "./context";
import {PaginationDots} from "./paginationDots";

interface IButtonLinkProps {
    children: React.ReactNode,
    pageNumber: number,
    aria?: string | undefined;
    showDots?: boolean | undefined;
}


const PaginationButton = ({children, pageNumber, aria, showDots}: IButtonLinkProps) => {
    const {ctxData: {current}, ctxFunctions: {getLinkUrl}} = usePaginationContext();
    const isCurrent = current === pageNumber;

    const btnClasses = clsx(
        'py-4 px-4',
        'flex items-center justify-center gap-1',
        'transition-all duration-200',
        {
            ['text-gray-400 hover:text-gray-400']: isCurrent,
            ['text-zinc-800 hover:hover:bg-zinc-800/10']: !isCurrent,
            ['dark:text-zinc-200 dark:hover:bg-zinc-800/90 ']: !isCurrent
        }
    );

    if (showDots) {
        return <PaginationDots/>
    }
    return isCurrent
        ? (
            <div className={clsx(btnClasses)}
                 aria-label='Current page'>
                {children}
            </div>
        )
        : (
            <Link href={getLinkUrl(pageNumber)}
                  className={clsx(btnClasses)}
                  aria-label={aria || `Navigate to page number ${pageNumber}`}
                  scroll={false}
            >
                {children}
            </Link>
        )
}

export {
    PaginationButton
}