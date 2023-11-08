import {fetchAuthorPosts} from "./utils";
import {BlogAuthorPostsListComponent} from "~/app.components/blogAuthorComponent/postsListComponent";
import {redirect} from "next/navigation";

interface IProps {
    params: {
        slug: string,
        currentPageNumber: string;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug, currentPageNumber} = params;
    const currentPage = parseInt(currentPageNumber, 10);
    const postsList = await fetchAuthorPosts(slug, currentPage)
    
    
    if(!postsList){
        redirect('/')
    }

    if(currentPage > postsList.pagination.totalPages){
        redirect(`/author/${props.params.slug}/posts`)
    }
    
    return <div>
        <BlogAuthorPostsListComponent slug={slug} posts={postsList.posts} paginationData={postsList.pagination} />
    </div>
}
export default Page;