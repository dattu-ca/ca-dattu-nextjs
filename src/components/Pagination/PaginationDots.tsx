'use client';
import React, {ChangeEvent, useCallback} from "react";
import clsx from 'clsx';
import {useRouter} from "next/navigation";
import {usePaginationContext} from "./context";


const PaginationDots = () => {
    const {ctxData: {totalPages}, ctxFunctions: {getLinkUrl}} = usePaginationContext();
    const router = useRouter();

    const onChangeDdl = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const newCurrent = Number(e.target.value);
        if (newCurrent > 0) {
            router.push(getLinkUrl(newCurrent));
        }
    }, [getLinkUrl, router])

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

export {
    PaginationDots
}