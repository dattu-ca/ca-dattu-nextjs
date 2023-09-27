import {CustomRichTexRenderer} from '../CustomRichTextRenderer'
import clsx from "clsx";
import Link from "next/link";
import dayjs from "dayjs";
import {BlogPost} from "~/models";
import {AuthorsNameList} from "../Author/AuthorsNameList";

interface IProps {
    post: BlogPost
}

const PostExcerpt = ({post}: IProps) => {
    return <div className={clsx(
        'container',
        'bg-white p-4 p-8',
        'shadow-sm'
    )}>
        <div className={clsx(
            'text-gray-400',
            'flex gap-2',
            'items-center',
            'mb-4'
        )}>
            <AuthorsNameList authors={post.authors} suffix=":"/>
            <span aria-label='Published on'>{dayjs(post.publishedDate).format('MMM DD, YYYY')}</span>
        </div>
        <h2>
            <Link href={`/post/${post.slug}`}>
                {post.heading}
            </Link>
        </h2>
        <CustomRichTexRenderer document={post.shortBody}/>
        <p className={clsx(
            'text-right'
        )}>
            <Link className={clsx(

            )} href={`/post/${post.slug}`}>...View more</Link>
        </p>
    </div>
}

export {
    PostExcerpt
}