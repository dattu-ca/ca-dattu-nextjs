import {redirect} from 'next/navigation';
import {RedirectType} from "next/dist/client/components/redirect";
import {blogPostServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {PostsListComponent} from "~/components/PostsList";


interface IProps {
    params: {
        currentPage: number;
    }
}


const Page = async (props: IProps) => {
    const {params} = props;
    const {currentPage: paramCurrentPage} = params;
    const currentPage = paramCurrentPage ? +paramCurrentPage : 1;

    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+currentPage - 1) * limit;
    const {items, total} = await blogPostServices.fetchListPaginated(skip, limit);

    if (items.length === 0) {
        redirect('/posts', RedirectType.replace);
        return null;
    }

    return <PostsListComponent posts={items} total={total} current={currentPage} limit={limit} skip={skip}
                               linkPrefix={'/posts'} linkFirstPage={'/posts'}/>
}
export default Page;