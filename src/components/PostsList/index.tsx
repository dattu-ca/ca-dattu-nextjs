import clsx from "clsx";
import {BlogPost} from "~/models";
import {PaginationComponent} from "~/components/Pagination";
import {PostExcerpt} from "./postExcerpt";


interface IProps {
    skip: number;
    limit: number;
    total: number;
    current: number;
    posts: BlogPost[];
    linkPrefix: string;
    linkFirstPage: string;
}

const PostsListComponent = ({
                                skip, limit, total, current, posts, linkPrefix, linkFirstPage
                            }: IProps) => {

    return <div className={clsx(
        'w-full'
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
            'mt-8'
        )}>
            <PaginationComponent skip={skip}
                                 limit={limit}
                                 total={total}
                                 current={current}
                                 linkPrefix={linkPrefix}
                                 linkFirstPage={linkFirstPage}
            />
        </div>
    </div>
}

export {
    PostsListComponent
}