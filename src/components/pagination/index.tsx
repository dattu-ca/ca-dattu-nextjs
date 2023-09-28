'use client';
import clsx from 'clsx';
import React from "react";
import {PaginationButtonsList} from "./paginationButtonsList";
import {PaginationContextProvider} from "./context";

interface IProps {
    total: number;
    skip: number;
    limit: number;
    current: number;
    linkPrefix: string;
    linkFirstPage: string;
}

const PaginationComponent = ({total, skip, limit, current, linkPrefix, linkFirstPage}: IProps) => {
    const totalPages = Math.ceil((total / limit));
    if (totalPages === 1) {
        return null;
    }

    return <PaginationContextProvider totalItems={total}
                                      skip={skip}
                                      limit={limit}
                                      current={current}
                                      linkPrefix={linkPrefix}
                                      linkFirstPage={linkFirstPage}>
        <PaginationButtonsList/>
    </PaginationContextProvider>
};

export {
    PaginationComponent
}