import {BlogAuthor} from "~/models";
import clsx from "clsx";
import React from "react";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";
import {AuthorAvatar} from "~/components/Author/Avatar";

interface IProps {
    author: BlogAuthor
}

const AuthorShortBioComponent = ({author}: IProps) => {
    const {name, shortBio} = author;
    return <div className={clsx(
        'bg-white p-4 md:p-8',
        'shadow-md'
    )}>
        <div className={clsx('mb-4')}>
            <AuthorAvatar author={author} className={clsx('w-8 h-8')}/>
        </div>
        <h4>{name}</h4>
        <CustomRichTexRenderer document={shortBio}/>
    </div>
}

export {
    AuthorShortBioComponent
}