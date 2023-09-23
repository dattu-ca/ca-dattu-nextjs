import clsx from "clsx";
import {IBlogPost} from "~/models";
import {PaginationComponent} from "~/components/Pagination";
import {PostExcerpt} from "./postExcerpt";


interface IProps {
    skip: number;
    limit: number;
    total: number;
    current: number;
    posts: IBlogPost[];

}

const PostsListComponent = ({
                                skip, limit, total, current, posts
                            }: IProps) => {

    return <div className={clsx(
        'mt-8'
    )}>
        <div>
            {
                posts.map(post => (
                    <div key={post.slug} className={clsx(
                        'mb-4'
                    )}>
                        <PostExcerpt post={post} />
                    </div>
                ))
            }
        </div>
        <div className={clsx(
            'container'
        )}>
            <PaginationComponent skip={skip}
                                 limit={limit}
                                 total={total}
                                 current={current}
                                 linkPrefix='/posts'/>
        </div>
    </div>
}

export {
    PostsListComponent
}