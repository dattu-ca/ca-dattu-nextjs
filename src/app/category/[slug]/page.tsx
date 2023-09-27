import {metaCategoryServices, blogPostServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {MetaCategory} from "~/models";
import {PostsListComponent} from "~/components/PostsList";


interface IProps {
    params: {
        slug: string;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const category = await metaCategoryServices.fetchBySlug(slug as string) as MetaCategory;

    const currentPage = 1;
    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+currentPage - 1) * limit;
    const {
        items,
        total
    } = await blogPostServices.fetchListPaginatedByCategories([category.sysId as string], skip, limit);


    return <div>
        <PostsListComponent posts={items}
                            total={total}
                            current={currentPage}
                            limit={limit}
                            skip={skip}
                            linkPrefix={`/category/${slug}/page/`}
                            linkFirstPage={`/category/${slug}`}
        />
    </div>
}
export default Page;