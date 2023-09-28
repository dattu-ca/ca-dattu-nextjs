'use client';
import React from 'react';
import clsx from "clsx";
import {BlogPage} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";
import {PageContextProvider} from "./context";

interface IProps {
    data: BlogPage;
}

export const PageComponent = ({data}: IProps) => {
    const {body, heading} = data;
    return <PageContextProvider data={data}>
        <div className={clsx()}>
            <h1>{heading}</h1>
            <CustomRichTexRenderer document={body}/>
        </div>
    </PageContextProvider>;
}