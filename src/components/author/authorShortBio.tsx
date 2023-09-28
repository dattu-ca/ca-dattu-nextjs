import Link from "next/link";
import clsx from "clsx";
import {BlogAuthor} from "~/models";
import {CustomRichTexRenderer} from "../customRichTextRenderer";
import {AuthorAvatar} from "./avatar";

interface IProps {
    author: BlogAuthor,
    showNameAsALink: boolean;
}

const AuthorShortBioComponent = ({author, showNameAsALink}: IProps) => {
    const {name, shortBio} = author;
    return <section className={clsx()}>
        <div className={clsx()}>
            <AuthorAvatar author={author} className={clsx()}/>
            <h4 className={clsx()}>
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