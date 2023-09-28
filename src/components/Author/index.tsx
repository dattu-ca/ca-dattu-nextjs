import {BlogAuthor} from "~/models";
import clsx from "clsx";
import React from "react";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";

interface IProps {
    author: BlogAuthor
}

const AuthorComponent = ({author}: IProps) => {
    const {bio} = author;
    return <div className={clsx()}>
        <CustomRichTexRenderer document={bio}/>
    </div>
}

export {
    AuthorComponent
}