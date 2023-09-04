'use client';
import {createContext, ReactElement, useCallback, useContext, useMemo} from "react";
import {SITE_CONSTANTS} from "~/utils/constants";
import {getPaginationLinks} from "./utils";


const MAX_NUMBER_OF_LINKS = SITE_CONSTANTS.DEFAULT_PAGINATION_MAX_LINKS;

interface IPaginationContextProps {
    total: number;
    skip: number;
    limit: number;
    current: number;
    totalPages: number;
    listOfLinks: any[];
    getLinkUrl: (pageNumber: number) => string;
}

const PaginationContext = createContext<IPaginationContextProps>({} as IPaginationContextProps)

const usePaginationContext = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error('usePaginationContext must be used within PaginationContextProvider')
    }
    return context;
};

interface IPaginationContextProviderProps {
    children: ReactElement,
    total: number;
    skip: number;
    limit: number;
    current: number;
    maxNumberOfLinks?: number;
    linkPrefix: string;
}

const PaginationContextProvider = ({
                                       children,
                                       total,
                                       skip,
                                       limit,
                                       current,
                                       maxNumberOfLinks: propMaxNumberOfLinks,
                                       linkPrefix,
                                   }: IPaginationContextProviderProps) => {
    const maxNumberOfLinks = propMaxNumberOfLinks || MAX_NUMBER_OF_LINKS;
    const totalPages = Math.ceil((total / limit));

    const listOfLinks = useMemo(() => getPaginationLinks(totalPages, current, maxNumberOfLinks), [totalPages, current, maxNumberOfLinks]);

    const getLinkUrl = useCallback((pageNumber: number) => {
        return `${linkPrefix}/${pageNumber}`
    }, [linkPrefix]);


    const props = useMemo<IPaginationContextProps>(() => ({
        total,
        skip,
        limit,
        current,
        totalPages,
        listOfLinks,
        getLinkUrl
    } as IPaginationContextProps), [total, skip, limit, current, totalPages, listOfLinks, getLinkUrl]);

    return <PaginationContext.Provider value={props}>
        {children}
    </PaginationContext.Provider>
}


export {PaginationContextProvider, usePaginationContext}