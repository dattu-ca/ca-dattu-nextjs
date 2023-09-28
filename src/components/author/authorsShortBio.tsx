import {BlogAuthor} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {CustomRichTexRenderer} from "../customRichTextRenderer";
import {AuthorAvatar} from "./avatar";

interface IProps {
    authors: BlogAuthor[],
    showNameAsALink: boolean;
}

const AuthorsShortBioComponent = ({authors, showNameAsALink}: IProps) => {

    return <div className={clsx()}>
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
    </div>
}

export {
    AuthorsShortBioComponent
}