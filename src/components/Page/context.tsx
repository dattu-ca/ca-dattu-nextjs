'use client';
import {createContext, ReactNode, useContext} from 'react';
import {IBlogPage, IBodyImage} from "~/models";


interface IProps {
    children: ReactNode,
    data: IBlogPage;
}

interface IValue {
    ctxData: {
        heading: string,
        banners: IBodyImage[],
        body: object
    }
}

const PageContext = createContext<IValue | null>({} as IValue)


export const PageContextProvider = ({children, data}: IProps) => {
    const value = {
        ctxData: {
            heading: data.heading,
            banners: data.banners,
            body: data.body
        }
    } as IValue;

    return <PageContext.Provider value={value}>
        {children}
    </PageContext.Provider>
}

export const usePageContext = () => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePageContext must be used within a PageContextProvider.')
    }
    return context;
};