import {BlogPost, MetaSeries} from "~/models";
import Link from "next/link";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    series: MetaSeries;
    postsList: BlogPost[];
    currentPostSlug: string;
}

const SeriesPostsListComponent = ({series, postsList, currentPostSlug}: IProps) => {
    return <DefaultBlocksLayout>
        <h4>Series: <Link href={`/series/${series.slug}`}>{series.name}</Link></h4>
        <p>Other posts in this series are as follows:</p>
        <ul>
            {
                postsList.map((post) => (
                    <li key={post.slug}>
                        {
                            currentPostSlug === post.slug
                                ? <span>{post.heading}</span>
                                : <Link href={post.slug}>{post.heading}</Link>
                        }
                    </li>
                ))
            }
        </ul>
    </DefaultBlocksLayout>
}

export {
    SeriesPostsListComponent
}