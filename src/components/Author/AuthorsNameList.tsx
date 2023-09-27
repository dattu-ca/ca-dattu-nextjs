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
            <div className={clsx(
                'flex',
                'items-center'
            )}>
                <div className={clsx(
                    'flex gap-3',
                    'flex-wrap',
                    'items-center'
                )}>
                    {
                        authors.map((author, index) => (
                            <div key={author.slug}
                                 className={clsx(
                                     'flex gap-2',
                                     'items-center'
                                 )}>
                                <Link href={`/author/${author.slug}`}
                                      className={clsx(
                                          'group',
                                          'hover:after:w-0'
                                      )}>
                                    <div className={clsx('daisyui-avatar daisyui-placeholder')}>
                                        <div
                                            className={clsx(
                                                'w-8 rounded-full',
                                                {
                                                    ['bg-neutral-focus text-neutral-content']: !author.avatar,
                                                    ['ring ring-site-secondary-light']: author.avatar
                                                }
                                            )}>
                                            {
                                                author.avatar 
                                                    ? <img src={author.avatar.desktopImage?.url}
                                                           alt={author.name}/>
                                                    : <span className="text-xs">{author.avatarInitials}</span>
                                            }
                                            
                                        </div>
                                    </div>
                                </Link>
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