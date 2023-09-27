import {BlogAuthor} from "~/models";
import clsx from "clsx";
import React from "react";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";
import {AuthorAvatar} from "~/components/Author/Avatar";
import Link from "next/link";

interface IProps {
    author: BlogAuthor,
    showNameAsALink: boolean;
}

const AuthorShortBioComponent = ({author, showNameAsALink}: IProps) => {
    const {name, shortBio} = author;
    return <section className={clsx(
        'bg-white p-4 md:p-8',
        'shadow-md'
    )}>
        <div className={clsx(
            'mb-4',
            'flex flex-nowrap',
            'items-center',
            'gap-4'
        )}>
            <AuthorAvatar author={author} className={clsx('w-8 h-8')}/>
            <h4 className={clsx(
                'm-0 p-0'
            )}>
                {
                    showNameAsALink
                        ? <Link href={`/author/${author.slug}`}>{name}</Link>
                        : <span>{name}</span>
                }
            </h4>
        </div>
        <CustomRichTexRenderer document={shortBio}/>
    </section>
}

export {
    AuthorShortBioComponent
}