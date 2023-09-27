import {BlogPost} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {SeriesBanner} from "~/components/Series/seriesBanner";

interface IProps {
    posts: BlogPost[];
}

const SidebarSeries = ({posts}: IProps) => {
    return <div className={clsx(
        'bg-white p-4 md:p-8',
        'shadow-md'
    )}>
        <h4>Other posts in the Series</h4>
        <div className={clsx(
            'mb-4 md:mb-8'
        )}>
            <SeriesBanner series={posts[0].series}/>
        </div>
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
    SidebarSeries
}