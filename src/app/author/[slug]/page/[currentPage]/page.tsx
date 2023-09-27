import {blogAuthorServices, blogPostServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {PostsListComponent} from "~/components/PostsList";
import {BlogAuthor} from "~/models";


interface IProps {
    params: {
        slug: string;
        currentPage: number;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug, currentPage: paramCurrentPage} = params;
    const author = await blogAuthorServices.fetchBySlug(slug as string) as BlogAuthor;

    const currentPage = paramCurrentPage ? +paramCurrentPage : 1;
    const limit = 1;// SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+currentPage - 1) * limit;
    const {items, total} = await blogPostServices.fetchListPaginatedByAuthor(author.sysId as string, skip, limit);


    return <PostsListComponent posts={items} total={total} 
                               current={currentPage} 
                               limit={limit} 
                               skip={skip}
                               linkPrefix={`/author/${slug}/page/`}
                               linkFirstPage={`/author/${slug}`}
    />
}
export default Page;