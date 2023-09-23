import {IBlogPost} from "~/models";
import {CustomRichTexRenderer} from '~/components/CustomRichTextRenderer'
import clsx from "clsx";
import Link from "next/link";

interface IProps {
    post: IBlogPost
}

const PostExcerpt = ({post}: IProps) => {
    return <div className={clsx(
        'container',
        'bg-white p-4 p-8',
        'shadow-sm'
    )}>
        <h2>{post.heading}</h2>
        <CustomRichTexRenderer document={post.shortBody}/>
        <p><Link href={`/post/${post.slug}`}>View more</Link></p>
    </div>
}

export {
    PostExcerpt
}