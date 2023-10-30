import {BlogPost, MetaSeries} from "~/models";
import {MetaContainer} from "./metaContainer";
import Link from "next/link";

interface IProps {
    series: MetaSeries;
    postsList: BlogPost[];
    currentPostSlug: string;
}

const SeriesPostsListComponent = ({series, postsList, currentPostSlug}: IProps) => {
    return <MetaContainer>
        <h4>Series: {series.name}</h4>
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
    </MetaContainer>
}

export {
    SeriesPostsListComponent
}