'use client';
import React from "react";
import clsx from 'clsx';
import Link from 'next/link';
import {usePaginationContext} from "./context";
import {PaginationDots} from "./PaginationDots";

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
            ['text-gray-400 hover:text-gray-400 ']: isCurrent,
            ['text-black hover:text-black hover:bg-gray-300 ' +
            'hover:after:w-0']: !isCurrent
        }
    );

    if (showDots) {
        return <PaginationDots/>
    }
    return isCurrent
        ? (
            <div className={clsx(btnClasses)} aria-label='Current page'>
                {children}
            </div>
        )
        : (
            <Link href={getLinkUrl(pageNumber)}
                  className={clsx(btnClasses)}
                  aria-label={aria || `Navigate to page number ${pageNumber}`}>
                {children}
            </Link>
        )
}

export {
    PaginationButton
}