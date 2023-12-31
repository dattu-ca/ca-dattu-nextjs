import Link from "next/link";
import {BodyPostsList} from "~/models";
import {PaginationComponent} from "~/app.ui.components/paginationComponent";


interface IProps {
    data: BodyPostsList
}

const BodyPostsListHeadingsOnlyComponent = ({data}: IProps) => {
    return (
        <>
            <ol>
                {
                    (data.posts || []).map((post) => (
                        <li key={post.slug}>
                            <Link href={`/post/${post.slug}`}>{post.displayHeading}</Link>
                        </li>
                    ))
                }
            </ol>
            {
                data.isPaginated && data.paginationData && data.paginationData.totalPages > 1
                && <PaginationComponent paginationData={data.paginationData}/>
            }
        </>
    );
}

export {
    BodyPostsListHeadingsOnlyComponent
}