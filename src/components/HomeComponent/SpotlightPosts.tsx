import {BlogPost} from "~/models";
import clsx from "clsx";
import Link from "next/link";

interface IProps {
    posts: BlogPost[]
}

const SpotlightPosts = ({posts}: IProps) => {

    return <div className={clsx(
        'w-full',
        'bg-white p-4 md:p-8',
        'shadow-md',
    )}>
        <ul className={clsx(
            'list-disc'
        )}>
            {
                posts.map(post => (
                    <li key={post.slug}>
                        <Link href={`/post/${post.slug}`}>{post.heading}</Link>
                    </li>
                ))
            }

        </ul>
    </div>
}

export {
    SpotlightPosts
}