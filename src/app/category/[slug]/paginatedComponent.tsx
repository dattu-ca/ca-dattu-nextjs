import {metaCategoryServices, blogPostServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {MetaCategory} from "~/models";
import {PostsListComponent} from "~/components/PostsList";


interface IProps {
    slug: string;
    currentPage: number;
}

const PaginatedComponent = async (props: IProps) => {
    const {slug, currentPage} = props;
    const category = await metaCategoryServices.fetchBySlug(slug as string) as MetaCategory;
    const categoryIds = [category.sysId as string, ...(category.children || []).map(child => child.sysId as string)];


    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+currentPage - 1) * limit;
    const {
        items,
        total
    } = await blogPostServices.fetchListPaginatedByCategories(categoryIds, skip, limit);


    return <PostsListComponent posts={items}
                               total={total}
                               current={currentPage}
                               limit={limit}
                               skip={skip}
                               linkPrefix={`/category/${slug}/page/`}
                               linkFirstPage={`/category/${slug}`}
    />
}
export {
    PaginatedComponent
}