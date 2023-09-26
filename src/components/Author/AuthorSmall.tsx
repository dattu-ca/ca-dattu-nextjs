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
                'flex',
                'items-center'
            )}>
                <div className={clsx(
                    'flex gap-3',
                    'items-center'
                )}>
                    {
                        authors.map((author, index) => (
                            <div key={author.slug}
                                 className={clsx(
                                     'flex gap-2',
                                     'items-center'
                                 )}>
                                {
                                    author.avatar && (
                                        <Link href={`/author/${author.slug}`}
                                            className={clsx(
                                                'group',
                                                'hover:after:w-0'
                                            )}>
                                            <div className={clsx('daisyui-avatar')}>
                                                <div
                                                    className={clsx(
                                                        'w-6 rounded-full',
                                                    )}>
                                                    <img src={author.avatar.desktopImage?.url}
                                                         alt={author.avatar.desktopImage?.alt}/>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
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
    AuthorSmall
}