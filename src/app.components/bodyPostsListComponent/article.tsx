import Link from "next/link";
import clsx from "clsx";
import dayjs from "dayjs";
import {PiCaretRightBold} from "react-icons/pi";
import {BlogPost} from "~/models";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";


interface IProps {
    post: BlogPost
}


const ArticleComponent = ({post}: IProps) => {
    return (
        <article className={clsx(
            'md:grid md:grid-cols-4 md:items-baseline'
        )}>
            <div className={clsx(
                'group relative',
                'flex flex-col items-start md:col-span-3'
            )}>
                <h2 className={clsx(
                    'text-base font-semibold tracking-tight',
                    'text-zinc-800 dark:text-zinc-100'
                )}>
                    <div className={clsx(
                        'absolute z-0 scale-95 opacity-0 transition',
                        '-inset-x-4 -inset-y-6 sm:-inset-x-6 ',
                        'sm:rounded-2xl',
                        'bg-zinc-50 group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50'
                    )}/>
                    <Link href={`/post/${post.slug}`}>
                        <span className={clsx(
                            'absolute ',
                            '-inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 ',
                            'sm:rounded-2xl'
                        )}></span>
                        <span className={clsx(
                            "relative z-10"
                        )}>{post.heading}</span>
                    </Link>
                </h2>
                <time
                    className={clsx(
                        'relative z-10',
                        'mb-3 pl-3.5 ',
                        'text-sm text-zinc-400 dark:text-zinc-500',
                        'md:hidden  order-first flex items-center',
                    )}
                    dateTime={dayjs(post.publishedDate).format('YYYY-MM-DD')}>
                    <span className={clsx(
                        'absolute',
                        'flex items-center',
                        "inset-y-0 left-0"
                    )} aria-hidden="true">
                        <span className={clsx(
                            "h-4 w-0.5 rounded-full",
                            "bg-zinc-200 dark:bg-zinc-500"
                        )}></span>
                    </span>
                    {dayjs(post.publishedDate).format('MMM DD, YYYY')}
                </time>
                <div className={clsx(
                    'relative z-10 ',
                    ' mt-2 text-sm',
                    'text-zinc-600 dark:text-zinc-400'
                )}>
                    <BlocksBodyContentComponent blocks={post.excerptBlocks} isExcerpts={true}/>
                </div>
                <div aria-hidden="true"
                     className={clsx(
                         'relative z-10 ',
                         "mt-4 flex items-center ",
                         "text-sm font-medium text-teal-500"
                     )}>
                    Read article
                    <PiCaretRightBold/>
                </div>
            </div>
            <time
                className={clsx(
                    "mt-1 mb-3",
                    "hidden md:block relative z-10 order-first flex items-center",
                    "text-sm text-zinc-400 dark:text-zinc-500"
                )}
                dateTime={dayjs(post.publishedDate).format('YYYY-MM-DD')}>
                {dayjs(post.publishedDate).format('MMM DD, YYYY')}
            </time>
        </article>
    )
}

export {
    ArticleComponent
}