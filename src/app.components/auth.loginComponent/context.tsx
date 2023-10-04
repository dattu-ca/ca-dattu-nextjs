'use client';
import {createContext, ReactNode, useContext, useMemo, useState} from 'react';
import {IProvider} from "./types";

interface IProps {
    children: ReactNode,
    providers: Record<"google"
            | "github",
            IProvider>
        | null,
    textContent: {
        title: string;
        button: string;
    }
}

interface IValue {
    ctxData: {
        providers: IProvider[],
        clickedProvider: string,
        textContent: {
            title: string;
            button: string;
        }
    },
    ctxFns: {
        setClickedProvider:  (value: (((prevState: string) => string) | string)) => void
    }
}

const AuthLoginContext = createContext<IValue | null>({ctxData: {}} as IValue)

export const AuthLoginContextProvider = ({children, providers, textContent}: IProps) => {
    const [clickedProvider, setClickedProvider] = useState<string>('');
    const value = useMemo(() => {
        const providersList: IProvider[] = [];
        
        if (providers?.google) {
            providersList.push(providers.google)
        }
        return {
            ctxData: {
                providers: providersList,
                clickedProvider,
                textContent
            },
            ctxFns: {
                setClickedProvider
            }
        } as IValue
    }, [providers, clickedProvider, textContent, setClickedProvider]);

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