import {CustomRichTexRenderer} from '~/components/CustomRichTextRenderer'
import clsx from "clsx";
import Link from "next/link";
import dayjs from "dayjs";
import {IBlogPost} from "~/models";
import {AuthorSmall} from "~/components/Author/AuthorSmall";

interface IProps {
    post: IBlogPost
}

const PostExcerpt = ({post}: IProps) => {
    return <div className={clsx(
        'container',
        'bg-white p-4 p-8',
        'shadow-sm'
    )}>
        <div className={clsx(
            'text-sm text-gray-400',
            'flex gap-2',
            'mb-4'
        )}>
            <AuthorSmall authors={post.authors} suffix=":" />
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
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
}

export {
    PostExcerpt
}