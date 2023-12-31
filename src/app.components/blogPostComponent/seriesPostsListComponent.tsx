import {MetaSeries} from "~/models";
import Link from "next/link";

interface IProps {
    series: MetaSeries;
    currentPostSlug: string;
}

const SeriesPostsListComponent = ({series, currentPostSlug}: IProps) => {
    const postsList = series?.postsListData?.posts;
    if (!postsList) {
        return null;
    }
    return <>
        <h4>Series: <Link href={`/series/${series.slug}`}>{series.displayName}</Link></h4>
        <p>Other articles in this series are as follows:</p>
        <ol>
            {
                postsList.map((post) => (
                    <li key={post.slug}>
                        {
                            currentPostSlug === post.slug
                                ? <span>{post.displayHeading}</span>
                                : <Link href={`/post/${post.slug}`}>{post.displayHeading}</Link>
                        }
                    </li>
                ))
            }
        </ol>
    </>
}

export {
    SeriesPostsListComponent
}