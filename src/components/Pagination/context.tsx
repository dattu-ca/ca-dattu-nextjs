'use client';
import {createContext, ReactElement, useCallback, useContext, useMemo} from "react";
import {SITE_CONSTANTS} from "~/utils/constants";


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
    linkPrefix: string;
}

const PaginationContextProvider = ({
                                       children,
                                       total,
                                       skip,
                                       limit,
                                       current,
                                       linkPrefix,
                                   }: IPaginationContextProviderProps) => {
    const totalPages = Math.ceil((total / limit));

    const listOfLinks = useMemo(() => {
        const raw = Array.from({length: totalPages}, (_, i) => i + 1);
        let links = raw.map(num => ({
            pageNumber: num,
            label: num,
            showDots: false,
        }));
        if (links.length > MAX_NUMBER_OF_LINKS) {
            const numberOfLinksOnEachSides = Math.floor((MAX_NUMBER_OF_LINKS / 2));

            const end = Math.min(totalPages, current + numberOfLinksOnEachSides) + (current <= numberOfLinksOnEachSides + 1 ? numberOfLinksOnEachSides - current + 1 : 0);
            const start = Math.max(1, end - MAX_NUMBER_OF_LINKS + 1);

            links = links.filter(link => link.pageNumber > start && link.pageNumber < end);

            if (!links.find(link => link.pageNumber === 2)) {
                const link = links.shift();
                links.unshift({
                    pageNumber: link.pageNumber,
                    label: 0,
                    showDots: true
                });
            }
            if (!links.find(link => link.pageNumber === totalPages - 1)) {
                const link = links.pop();
                links.push({
                    pageNumber: link.pageNumber,
                    label: 0,
                    showDots: true
                })
            }
            if (links.at(0).pageNumber !== 1) {
                links.unshift({
                    pageNumber: 1,
                    label: 1,
                    showDots: false,
                })
            }
            if (links.at(-1).pageNumber !== totalPages) {
                links.push({
                    pageNumber: totalPages,
                    label: totalPages,
                    showDots: false,
                })
            }
        }
        return links;
    }, [totalPages, current]);

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