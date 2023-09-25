import Link from "next/link";
import clsx from "clsx";
import {IBodyAuthor} from "~/models";

interface IProps {
    authors: IBodyAuthor[],
    suffix: string;
}


const AuthorSmall = ({authors, suffix}: IProps) => {
    return authors && authors.length > 0 &&
        (
            <div className={clsx(
                'flex'
            )}>
                <div className={clsx(
                    'flex gap-1'
                )}>
                    {
                        authors.map((author, index) => (
                            <div key={author.slug}>
                                <Link href={`/author/${author.slug}`}>{author.name}</Link>
                                {
                                    (index < authors.length - 1) && <span>, </span>
                                }
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
    AuthorSmall
}