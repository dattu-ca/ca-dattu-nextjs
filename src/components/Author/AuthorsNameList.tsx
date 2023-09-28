import Link from "next/link";
import clsx from "clsx";
import {BlogAuthor} from "~/models";

interface IProps {
    authors: BlogAuthor[],
    suffix: string;
}


const AuthorsNameList = ({authors, suffix}: IProps) => {
    return authors && authors.length > 0 &&
        (
            <div className={clsx()}>
                <div className={clsx()}>
                    {
                        authors?.map((author, index) => (
                            <div key={author.slug}
                                 className={clsx()}>
                                <div className={clsx()}>
                                    <div
                                        className={clsx()}>
                                        {
                                            author.avatar
                                                ? <img src={author.avatar.desktopImage?.url}
                                                       alt={author.name}/>
                                                : <span className={clsx()}>{author.avatarInitials}</span>
                                        }
                                    </div>
                                </div>
                                <span>
                                    <Link href={`/author/${author.slug}`}>{author.name}</Link>
                                    {
                                        (index < authors.length - 1) && <span>, </span>
                                    }
                                </span>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {suffix}
                </div>
            </div>
        )

}

export {
    AuthorsNameList
}