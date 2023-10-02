import {BlogPost} from "~/models";
import {PaginationComponent} from "~/app.ui.components/paginationComponent";
import {BlocksLayout} from "~/app.ui.components/blocksLayout";

interface IProps {
    posts: BlogPost[];
    total: number;
    skip: number;
    limit: number;
    current: number;
    linkPrefix: string;
    linkFirstPage: string;
}
const BlogPostsListComponent = ({
                                    skip, limit, total, current, posts, linkPrefix, linkFirstPage
                                }:IProps) =>{
    return <BlocksLayout layoutWidth='Narrow'>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
        <PaginationComponent total={total} skip={skip} limit={limit} current={current} linkPrefix={linkPrefix} linkFirstPage={linkFirstPage} />
    </BlocksLayout>
}

export {
    BlogPostsListComponent
}