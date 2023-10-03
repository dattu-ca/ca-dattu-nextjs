import {BlogPostsListComponent} from "~/app.components/blogPostsListComponent";
import {fetchPostsLists, getCurrentPageNumber} from "./utils";


interface IProps {
    params: {
        currentPageNumber?: number | undefined;
    }
}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchPostsLists(currentPage);

    return <BlogPostsListComponent posts ={data.items}
                                   total={data.total}
                                   skip={data.skip}
                                   limit={data.limit}
                                   current={currentPage}
                                   linkFirstPage='/posts'
                                   linkPrefix='/posts' />
}
export default Page;