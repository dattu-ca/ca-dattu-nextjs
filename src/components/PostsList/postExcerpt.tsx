import {CustomRichTexRenderer} from '../CustomRichTextRenderer'
import clsx from "clsx";
import Link from "next/link";
import dayjs from "dayjs";
import {BlogPost, MetaCategory} from "~/models";
import {AuthorsNameList} from "../Author/AuthorsNameList";
import {FeaturedBanner} from "~/components/FeaturedBanner";
import {CategoriesNamesList} from "~/components/Category/CategoriesNameList";
import {SeriesBanner} from "~/components/Series/seriesBanner";

interface IProps {
    post: BlogPost
}

const PostExcerpt = ({post}: IProps) => {
    return <div>
        {
            post.featuredBanner && <FeaturedBanner featuredBanner={post.featuredBanner}/>
        }
        <div className={clsx(
            'bg-white p-4 p-8',
            'shadow-md'
        )}>
            <div className={clsx(
                'text-gray-400',
                'flex gap-2',
                'flex-wrap',
                'items-center',
                'mb-4 md:mb-8',
            )}>
                <AuthorsNameList authors={post.authors} suffix=":"/>
                <span aria-label='Published on'>{dayjs(post.publishedDate).format('MMM DD, YYYY')}</span>
            </div>
            {
                post.series && <div className={clsx('mb-4 md:mb-8')}><SeriesBanner series={post.series}/></div>
            }
            <h2>
                <Link href={`/post/${post.slug}`}>
                    {post.heading}
                </Link>
            </h2>
            <CustomRichTexRenderer document={post.shortBody}/>
            {
                post.categories && <CategoriesNamesList categories={post.categories as MetaCategory[]}/>
            }
            <p className={clsx(
                'text-right'
            )}>
                <Link className={clsx()} href={`/post/${post.slug}`}>...View more</Link>
            </p>
        </div>
    </div>
}

export {
    PostExcerpt
}