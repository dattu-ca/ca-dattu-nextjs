'use client';
import React from "react";
import clsx from 'clsx';
import {PaginationButton} from "./PaginationButton";
import {PaginationDots} from './PaginationDots';
import {usePaginationContext} from "./context";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";


const PaginationButtonsList = () => {
    const {ctxData: {totalPages, listOfLinks: links, current}} = usePaginationContext();
    if (totalPages === 1) {
        return null;
    }

    return <nav>
        <ul className={clsx()}>
            <li className={clsx()}>
                <PaginationButton pageNumber={Math.max(1, current - 1)}
                                  aria='Go to previous page'>
                    <BsChevronLeft  className={clsx()}/> Previous
                </PaginationButton>
            </li>
            {
                links.map(link => <li key={link.pageNumber} className={clsx()}>
                    <PaginationButton pageNumber={link.pageNumber}
                                      showDots={link.showDots}>
                        {link.label}
                    </PaginationButton>
                </li>)
            }
            {
                links.length > 0 && (
                    <li className={clsx()}>
                        <PaginationDots/>
                    </li>
                )
            }

            <li className={clsx()}>
                <PaginationButton pageNumber={Math.min(totalPages, current + 1)}
                                  aria='Go to next page'>
                    Next <BsChevronRight className={clsx()}/>
                </PaginationButton>
            </li>
        </ul>
    </nav>
};

export {
    PaginationButtonsList
}