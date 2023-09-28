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

    const btnClasses = clsx();

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