'use client';
import {createContext, ReactNode, useContext} from 'react';
import {IBlogPost, IBodyImage} from "~/models";


interface IProps {
    children: ReactNode,
    data: IBlogPost;
}

interface IValue {
    ctxData: {
        heading: string,
        banners: IBodyImage[],
        body: object
    }
}

const PostContext = createContext<IValue | null>({ctxData: {}} as IValue)


export const PostContextProvider = ({children, data}: IProps) => {
    const value = {
        ctxData: {
            heading: data.heading,
            banners: data.banners,
            body: data.body
        }
    } as IValue;

    return <PostContext.Provider value={value}>
        {children}
    </PostContext.Provider>
}

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePostContext must be used within a PostContextProvider.')
    }
    return context;
};