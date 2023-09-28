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

    return <section className={clsx()}>
        <div className={clsx()}>
            <h4 className={clsx( )}>
                Authors
            </h4>
        </div>
        <div>
            {
                authors?.map((author) => {
                    const {name, shortBio, slug} = author;
                    return <div key={slug}
                                className={clsx()}>
                        <div className={clsx( )}>
                            <AuthorAvatar author={author} className={clsx()}/>
                            <h5 className={clsx()}>
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