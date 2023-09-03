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
        console.log('newCurrent', newCurrent)
        if (newCurrent > 0) {
            console.log("GO TO PAGE", newCurrent)
            router.push(getLinkUrl(newCurrent));
        }
    }, [getLinkUrl])

    return <select defaultValue={0}
                   onChange={onChangeDdl}
                   className={clsx(
                       'transition-all duration-200',
                       'appearance-none relative',
                       'py-4 px-4',
                       'w-[10px] box-content',
                       'h-full bg-transparent',
                       'text-center text-black',
                       'hover:cursor-pointer hover:bg-gray-300 ',
                   )}
                   aria-label='Select page number'>
        <option value={0}>...</option>
        {
            (Array.from({length: Number(totalPages)}, (_, i) => i + 1)).map(p => <option key={p} value={p}>Go to
                page {p}</option>)
        }
    </select>
}


const PaginationButton = ({children, pageNumber, aria, showDots}: IButtonLinkProps) => {
    const {current, getLinkUrl} = usePaginationContext();
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
    PaginationDots,
    PaginationButton
}