'use client';
import {createContext, ReactNode, useContext, useMemo} from 'react';
import {IProvider} from "./types";
import {IBodyForm} from "~/models";

interface IProps {
    children: ReactNode,
    providers: Record<"google"
            | "github",
            IProvider>
        | null
}

interface IValue {
    ctxData: {
        providers: IProvider[]
    }
}

const AuthLoginContext = createContext<IValue | null>({ctxData: {}} as IValue)

export const AuthLoginContextProvider = ({children, providers, form}: IProps) => {
    const value = useMemo(() => ({
        ctxData: {
            providers: Object.values(providers)
        }
    } as IValue), [providers, form]);

    return <AuthLoginContext.Provider value={value}>
        {children}
    </AuthLoginContext.Provider>
}

export const useAuthLoginContext = () => {
    const context = useContext(AuthLoginContext);
    if (!context) {
        throw new Error('useAuthLoginContext must be used within a AuthLoginContextProvider.')
    }
    return context;
};