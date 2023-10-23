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
    if(!post){
        return null;
    }
    return (
        <article>
            <div className={clsx(
                'text-zinc-600 dark:text-zinc-400',
                {
                    ['mb-4']: (post.preHeadingExcerptBlocks || []).length > 0
                }
            )}>
                <BlocksBodyContentComponent blocks={post.preHeadingExcerptBlocks} isExcerpts={true}/>
            </div>
            <div className={clsx(
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
                        {post.heading}
                    </h2>
                    <time
                        className={clsx(
                            'relative z-10',
                            'mb-3 pl-3.5 ',
                            'text-sm text-zinc-400 dark:text-zinc-500',
                            'md:hidden  order-first flex items-center',
                        )}
                        dateTime={dayjs(post.datePublished).format('YYYY-MM-DD')}>
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
                        {dayjs(post.datePublished).format('MMM DD, YYYY')}
                    </time>
                    <div className={clsx(
                        'relative z-10 ',
                        ' mt-2 text-sm',
                        'text-zinc-600 dark:text-zinc-400'
                    )}>
                        <BlocksBodyContentComponent blocks={post.excerptBlocks} isExcerpts={true}/>
                    </div>
                    <div className={clsx(
                        'mt-4 '
                    )}>
                        <Link href={`/post/${post.slug}`}>
                            <div aria-hidden="true"
                                 className={clsx(
                                     'relative z-10 ',
                                     "flex items-center ",
                                     "text-sm font-medium text-teal-500"
                                 )}>
                                Read article
                                <PiCaretRightBold/>
                            </div>
                        </Link>
                    </div>
                </div>
                <time
                    className={clsx(
                        "mt-1 mb-3",
                        "hidden md:block relative z-10 order-first flex items-center",
                        "text-sm text-zinc-400 dark:text-zinc-500"
                    )}
                    dateTime={dayjs(post.datePublished).format('YYYY-MM-DD')}>
                    {dayjs(post.datePublished).format('MMM DD, YYYY')}
                </time>
            </div>
        </article>
    )
}

export {
    ArticleComponent
}