import {metaTagServices, blogPostServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {MetaTag} from "~/models";
import {PostsListComponent} from "~/components/postsList";


interface IProps {
    slug: string;
    currentPage: number;
}

const PaginatedComponent = async (props: IProps) => {
    const {slug, currentPage} = props;
    const tag = await metaTagServices.fetchBySlug(slug as string) as MetaTag;


    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+currentPage - 1) * limit;
    const {
        items,
        total
    } = await blogPostServices.fetchListPaginatedByTag(tag.sysId as string, skip, limit);


    return <PostsListComponent posts={items}
                               total={total}
                               current={currentPage}
                               limit={limit}
                               skip={skip}
                               linkPrefix={`/tag/${slug}/page/`}
                               linkFirstPage={`/tag/${slug}`}
    />
}
export {
    PaginatedComponent
}