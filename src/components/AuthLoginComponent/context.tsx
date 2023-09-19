'use client';
import {createContext, ReactNode, useContext, useMemo} from 'react';
import {IProvider} from "./types";

interface IProps {
    children: ReactNode,
    providers: Record<"google"
            | "github",
            IProvider>
        | null,
    error?: string | undefined
}

interface IValue {
    ctxData: {
        providers: IProvider[],
        error?: string | undefined
    }
}

const AuthLoginContext = createContext<IValue | null>({ctxData: {}} as IValue)

export const AuthLoginContextProvider = ({children, providers, error}: IProps) => {
    const value = useMemo(() => {
        const providersList: IProvider[] = [];
        // const providersList: IProvider[] = Object.values(providers).filter(p => !p);
        if(providers?.google){
            providersList.push(providers.google)
        }
        return {
            ctxData: {
                providers: providersList,
                error
            }
        } as IValue
    }, [providers, error]);

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