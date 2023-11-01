import {fetchAuthorPosts} from "./utils";
import {BlogAuthorPostsListComponent} from "~/app.components/blogAuthorComponent/postsListComponent";

interface IProps {
    params: {
        slug: string,
        currentPageNumber: string;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug, currentPageNumber} = params;
    const postsList = await fetchAuthorPosts(slug, parseInt(currentPageNumber, 10))
    if(!postsList){
        return <p>Error retrieving data</p>
    }
    return <div>
        <BlogAuthorPostsListComponent slug={slug} posts={postsList.posts} paginationData={postsList.pagination} />
    </div>
}
export default Page;