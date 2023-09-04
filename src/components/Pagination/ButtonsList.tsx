'use client';
import React from "react";
import clsx from 'clsx';
import {ReactIcon} from '~/components/ReactIcon';
import {PaginationButton} from "./PaginationButton";
import {PaginationDots} from './PaginationDots';
import {usePaginationContext} from "./context";


const PaginationButtonsList = () => {
    const {ctxData: {totalPages, listOfLinks: links, current}} = usePaginationContext();
    if (totalPages === 1) {
        return null;
    }

    return <nav>
        <ul className={clsx(
            'list-none m-0 p-0',
            'flex items-center justify-center flex-wrap',
            'border border-solid border-2 border-gray-400',
            'rounded-2xl',
        )}>
            <li className={'p-0 m-0'}>
                <PaginationButton pageNumber={Math.max(1, current - 1)}
                                  aria='Go to previous page'>
                    <ReactIcon icon='BsChevronLeft' className='w-[auto] h-full'/> Previous
                </PaginationButton>
            </li>
            {
                links.map(link => <li key={link.pageNumber} className={'p-0 m-0 hidden md:block'}>
                    <PaginationButton pageNumber={link.pageNumber}
                                      showDots={link.showDots}>
                        {link.label}
                    </PaginationButton>
                </li>)
            }
            {
                links.length > 0 && (
                    <li className={'p-0 m-0 md:hidden'}>
                        <PaginationDots/>
                    </li>
                )
            }

            <li className={'p-0 m-0'}>
                <PaginationButton pageNumber={Math.min(totalPages, current + 1)}
                                  aria='Go to next page'>
                    Next <ReactIcon icon='BsChevronRight' className='w-[auto] h-full'/>
                </PaginationButton>
            </li>
        </ul>
    </nav>
};

export {
    PaginationButtonsList
}