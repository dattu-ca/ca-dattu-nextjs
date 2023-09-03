'use client';
import clsx from 'clsx';
import {ReactIcon} from '~/components/ReactIcon';
import React from "react";
import {PaginationButton} from "./PaginationButton";
import {usePaginationContext} from "./context";


const PaginationButtonsList = () => {
    const {totalPages, listOfLinks: links, current} = usePaginationContext();
    if (totalPages === 1) {
        return null;
    }

    return <nav>
        <ul className={clsx(
            'list-none ',
            'flex items-center justify-center flex-wrap gap-2'
        )}>
            <li>
                <PaginationButton pageNumber={Math.max(1, current - 1)}
                                  aria='Go to previous page'>
                    <div className={clsx(
                        'flex gap-1 items-center'
                    )}>
                        <ReactIcon icon='BsChevronLeft' className='w-[auto] h-full'/> Previous
                    </div>
                </PaginationButton>
            </li>
            {
                links.map(link => <li key={link.pageNumber}>
                    <PaginationButton pageNumber={link.pageNumber}
                                      showDots={link.showDots}>
                        {link.label}
                    </PaginationButton>
                </li>)
            }
            <li>
                <PaginationButton pageNumber={Math.min(totalPages, current + 1)}
                                  aria='Go to next page'
                                  current={current}>
                    <div className={clsx(
                        'flex gap-1 items-center'
                    )}>
                        Next <ReactIcon icon='BsChevronRight' className='w-[auto] h-full'/>
                    </div>
                </PaginationButton>
            </li>
        </ul>
    </nav>
};

export {
    PaginationButtonsList
}