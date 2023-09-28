import {CustomRichTexRenderer} from '../customRichTextRenderer'
import clsx from "clsx";
import Link from "next/link";
import dayjs from "dayjs";
import {BlogPost, MetaCategory} from "~/models";
import {AuthorsNameList} from "../author/authorsNameList";
import {FeaturedBanner} from "~/components/featuredBanner";
import {CategoriesNamesList} from "~/components/category/categoriesNameList";
import {SeriesBanner} from "~/components/series/seriesBanner";

interface IProps {
    post: BlogPost
}

const PostExcerpt = ({post}: IProps) => {
    return <div>
        {
            post.featuredBanner && <FeaturedBanner featuredBanner={post.featuredBanner}/>
        }
        <div className={clsx()}>
            <div className={clsx()}>
                <AuthorsNameList authors={post.authors} suffix=":"/>
                <span aria-label='Published on'>{dayjs(post.publishedDate).format('MMM DD, YYYY')}</span>
            </div>
            {
                post.series && <div className={clsx()}><SeriesBanner series={post.series}/></div>
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
            <p className={clsx()}>
                <Link className={clsx()} href={`/post/${post.slug}`}>...View more</Link>
            </p>
        </div>
    </div>
}

export {
    PostExcerpt
}