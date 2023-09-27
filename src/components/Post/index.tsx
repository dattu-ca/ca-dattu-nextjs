'use client';
import React from 'react';
import clsx from "clsx";
import { useRouter } from 'next/navigation'
import {CustomRichTexRenderer} from "~/components/CustomRichTextRenderer";
import {BlogPost} from "~/models";

import {PostContextProvider} from "./context";
import {BannerComponent} from "~/components/Banner";

interface IProps {
    data: BlogPost;
}

export const PostComponent = (props: IProps) => {
    const {data} = props;
    const {body, banners, heading} = data;
    const router = useRouter();
    
    
    const onGoBackHandler = () => {
        router.back();
    }
    
    return <PostContextProvider data={data}>
        <div className={clsx(
            'bg-white p-4 md:p-8',
            'shadow-md'
        )}>
            <p><button className={'btn-text-secondary p-0'} onClick={onGoBackHandler}>Go back</button></p>
            <h1>{heading}</h1>
            <CustomRichTexRenderer document={body}/>
        </div>
    </PostContextProvider>;
}