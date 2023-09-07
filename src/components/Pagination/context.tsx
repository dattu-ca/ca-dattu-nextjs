'use client';
import {createContext, ReactElement, useCallback, useContext, useMemo} from "react";
import {CLIENT_CONFIG} from "~/utils/constants.client";
import {getPaginationLinks} from "./utils";


const MAX_NUMBER_OF_LINKS = CLIENT_CONFIG.SITE_CONSTANTS.DEFAULT_PAGINATION_MAX_LINKS;

interface IPaginationContextProps {
    ctxData: {
        current: number;
        totalPages: number;
        listOfLinks: any[];
    },
    ctxFunctions: {
        getLinkUrl: (pageNumber: number) => string;
    }
}

const PaginationContext = createContext<IPaginationContextProps>({ctxData: {}, ctxFunctions: {}} as IPaginationContextProps)

const usePaginationContext = () => {
    const context = useContext(PaginationContext);
    if (!context) {
        throw new Error('usePaginationContext must be used within PaginationContextProvider')
    }
    return context;
};

interface IPaginationContextProviderProps {
    children: ReactElement,
    totalItems: number;
    skip: number;
    limit: number;
    current: number;
    maxNumberOfLinks?: number;
    linkPrefix: string;
}

const PaginationContextProvider = ({
                                       children,
                                       totalItems,
                                       limit,
                                       current,
                                       maxNumberOfLinks: propMaxNumberOfLinks,
                                       linkPrefix,
                                   }: IPaginationContextProviderProps) => {
    const maxNumberOfLinks = propMaxNumberOfLinks || MAX_NUMBER_OF_LINKS;
    const totalPages = Math.ceil((totalItems / limit));

    const listOfLinks = useMemo(() => getPaginationLinks(totalPages, current, maxNumberOfLinks), [totalPages, current, maxNumberOfLinks]);

    const getLinkUrl = useCallback((pageNumber: number) => {
        return `${linkPrefix}/${pageNumber}`
    }, [linkPrefix]);


    const props = useMemo<IPaginationContextProps>(() => ({
        ctxData: {
            current,
            totalPages,
            listOfLinks,
        },
        ctxFunctions: {
            getLinkUrl
        }
    } as IPaginationContextProps), [current, totalPages, listOfLinks, getLinkUrl]);

    return <PaginationContext.Provider value={props}>
        {children}
    </PaginationContext.Provider>
}


export {PaginationContextProvider, usePaginationContext}