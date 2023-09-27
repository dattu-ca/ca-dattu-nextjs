'use client';
import {createContext, ReactNode, useContext, useMemo, useState} from 'react';
import {IProvider} from "./types";

interface IProps {
    children: ReactNode,
    providers: Record<"google"
            | "github",
            IProvider>
        | null
}

interface IValue {
    ctxData: {
        providers: IProvider[],
        clickedProvider: string,
    },
    ctxFns: {
        setClickedProvider:  (value: (((prevState: string) => string) | string)) => void
    }
}

const AuthLoginContext = createContext<IValue | null>({ctxData: {}} as IValue)

export const AuthLoginContextProvider = ({children, providers}: IProps) => {
    const [clickedProvider, setClickedProvider] = useState<string>('');
    const value = useMemo(() => {
        const providersList: IProvider[] = [];
        
        if (providers?.google) {
            providersList.push(providers.google)
        }
        return {
            ctxData: {
                providers: providersList,
                clickedProvider
            },
            ctxFns: {
                setClickedProvider
            }
        } as IValue
    }, [providers, clickedProvider, setClickedProvider]);

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