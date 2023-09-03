'use client';
import clsx from 'clsx';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import React, {useCallback} from "react";
import {usePaginationContext} from "./context";

interface IButtonLinkProps {
    children: React.ReactNode,
    pageNumber: number,
    aria?: string;
    showDots?: boolean;
}

const PaginationDots = () => {
    const {totalPages, getLinkUrl} = usePaginationContext();
    const router = useRouter();

    const onChangeDdl = useCallback((e) => {
        const newCurrent = Number(e.target.value);
        if (newCurrent > 0) {
            router.push(getLinkUrl(newCurrent));
        }
    }, [getLinkUrl])

    return <div className={clsx(
        'text-black relative group',
        'after:transition-all after:duration-200',
        'after:bg-site-primary after:content-[\'\'] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]',
        'hover:after:w-full'
    )}>
        <select defaultValue={0}
                onChange={onChangeDdl}
                className={clsx(
                    'transition-all duration-200',
                    'appearance-none relative',
                    'w-[30px]  bg-transparent',
                    'text-center text-site-secondary',
                    'group-hover:cursor-pointer',
                    'group-hover:text-site-primary'
                )}
                aria-label='Select page number'>
            <option value={0}>...</option>
            {
                (Array.from({length: Number(totalPages)}, (_, i) => i + 1)).map(p => <option key={p}>{p}</option>)
            }
        </select>
    </div>
}


const PaginationButton = ({children, pageNumber, aria, showDots}: IButtonLinkProps) => {
    const {current, getLinkUrl} = usePaginationContext();

    const btnClasses = clsx(
        '',
        ''
    );

    if (showDots) {
        return <PaginationDots/>
    }
    return current === pageNumber
        ? (
            <div className={clsx(btnClasses, 'text-gray-400')} aria-label='Current page'>
                {children}
            </div>
        )
        : (
            <Link href={getLinkUrl(pageNumber)}
                  className={clsx(btnClasses, 'text-black')}
                  aria-label={aria || `Navigate to page number ${pageNumber}`}>
                {children}
            </Link>
        )
}

export {
    PaginationDots,
    PaginationButton
}