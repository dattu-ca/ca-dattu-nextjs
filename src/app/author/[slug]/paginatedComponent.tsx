import {PostsListComponent} from "~/components/PostsList";
import {blogAuthorServices, blogPostServices} from "~/services";
import {BlogAuthor} from "~/models";
import {SERVER_CONFIG} from "~/utils/config.server";

interface IProps {
    slug: string;
    currentPage: number;
}

const PaginatedComponent = async (props: IProps) => {
    const {slug, currentPage} = props;

    const author = await blogAuthorServices.fetchBySlug(slug as string) as BlogAuthor;

    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+currentPage - 1) * limit;
    const {items, total} = await blogPostServices.fetchListPaginatedByAuthor(author.sysId as string, skip, limit);

    return <PostsListComponent posts={items}
                               total={total}
                               current={currentPage}
                               limit={limit}
                               skip={skip}
                               linkPrefix={`/author/${slug}/page/`}
                               linkFirstPage={`/author/${slug}`}
    />
}

export {
    PaginatedComponent
}