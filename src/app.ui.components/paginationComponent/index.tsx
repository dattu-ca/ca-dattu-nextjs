'use client';
import React from "react";
import {PaginationButtonsList} from "./paginationButtonsList";
import {PaginationContextProvider} from "./context";
import {PaginationConfig} from "~/models";

interface IProps {
    paginationData: PaginationConfig
}

const PaginationComponent = ({paginationData}: IProps) => {
    const { total, skip, limit, current, linkPrefix, linkFirstPage } = paginationData;
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