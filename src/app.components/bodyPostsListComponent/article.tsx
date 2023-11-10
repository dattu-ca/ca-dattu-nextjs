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
    if (!post) {
        return null;
    }
    // return <article className="md:grid md:grid-cols-4 md:items-baseline"><div className="md:col-span-3 group relative flex flex-col items-start"><h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"><div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div><a href="/articles/crafting-a-design-system-for-a-multiplanetary-future"><span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span className="relative z-10">Crafting a design system for a multiplanetary future</span></a></h2><time className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime="2022-09-05"><span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>September 5, 2022</time><p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.</p><div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">Read article<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><time className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" dateTime="2022-09-05">September 5, 2022</time></article>
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
                        <div
                            className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                        <Link href={`/post/${post.slug}`}>
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">{post.heading}</span>
                        </Link>
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
                        {dayjs(post.datePublished).format('MMMM DD, YYYY')}
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
                    {dayjs(post.datePublished).format('MMMM DD, YYYY')}
                </time>
            </div>
        </article>
    )
}

export {
    ArticleComponent
}