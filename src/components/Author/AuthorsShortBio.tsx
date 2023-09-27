import {BlogAuthor} from "~/models";
import clsx from "clsx";
import React from "react";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";
import {AuthorAvatar} from "~/components/Author/Avatar";
import Link from "next/link";
import {Fragment} from "preact";

interface IProps {
    authors: BlogAuthor[],
    showNameAsALink: boolean;
}

const AuthorsShortBioComponent = ({authors, showNameAsALink}: IProps) => {

    return <section className={clsx(
        'bg-white',
        'shadow-md'
    )}>
        <div className={clsx(
            'p-4 md:p-8',
        )}>
            <h4 className={clsx(
                'mb-0 md:mb-0'
            )}>
                Authors
            </h4>
        </div>
        <div>
            {
                authors.map((author) => {
                    const {name, shortBio, slug} = author;
                    return <div key={slug}
                                className={clsx(
                                    'border-b-2',
                                    'p-4 md:p-8',
                                    'first-of-type:pt-0 first-of-type:md:pt-0'
                                )}>
                        <div className={clsx(
                            'flex flex-nowrap',
                            'items-center',
                            'gap-4',
                            'mb-2 md:mb-4'
                        )}>
                            <AuthorAvatar author={author} className={clsx('w-8 h-8')}/>
                            <h5 className={clsx(
                                'm-0 p-0'
                            )}>
                                {
                                    showNameAsALink
                                        ? <Link href={`/author/${author.slug}`}>{name}</Link>
                                        : <span>{name}</span>
                                }
                            </h5>
                        </div>
                        <CustomRichTexRenderer document={shortBio}/>
                    </div>
                })
            }
        </div>
    </section>
}

export {
    AuthorsShortBioComponent
}