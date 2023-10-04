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

    return <BlogPostsListComponent blogPostsList={data.blogPostsList} />
}
export default Page;