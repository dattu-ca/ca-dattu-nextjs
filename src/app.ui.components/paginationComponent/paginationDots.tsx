'use client';
import React, {ChangeEvent, useCallback} from "react";
import clsx from 'clsx';
import {useRouter} from "next/navigation";
import {usePaginationContext} from "./context";


const PaginationDots = () => {
    const {ctxData: {totalPages}, ctxFunctions: {getLinkUrl}} = usePaginationContext();
    const {push: routerPush} = useRouter();

    const onChangeDdl = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const newCurrent = Number(e.target.value);
        if (newCurrent > 0) {
            routerPush(getLinkUrl(newCurrent));
        }
    }, [getLinkUrl, routerPush])

    return <select defaultValue={0}
                   onChange={onChangeDdl}
                   className={clsx(                       
                       'appearance-none relative',
                       'py-4 px-4',
                       'w-[12px] box-content',
                       'text-zinc-800 hover:hover:bg-zinc-800/10',
                       'dark:text-zinc-200 dark:bg-transparent dark:hover:bg-zinc-800/90 ',
                   )}
                   aria-label='Select page number'
                   data-testid='pagination-dots'>
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