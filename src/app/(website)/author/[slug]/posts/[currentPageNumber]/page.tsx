import {fetchAuthorPosts} from "./utils";
import {BlogAuthorPostsListComponent} from "~/app.components/blogAuthorComponent/postsListComponent";
import {redirect} from "next/navigation";

interface IProps {
    params: {
        slug: string,
        currentPageNumber: string;
    }
}

export const revalidate = 86400;

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug, currentPageNumber} = params;
    const currentPage = parseInt(currentPageNumber, 10);
    const author = await fetchAuthorPosts(slug, currentPage)


    if (!author || !author.postsListData) {
        redirect('/')
    }

    const paginationConfig = author.postsListData?.paginationData;
    if (paginationConfig && currentPage > paginationConfig.totalPages) {
        redirect(`/author/${props.params.slug}/posts`)
    }

    return <div>
        <BlogAuthorPostsListComponent postsListData={author.postsListData}/>
    </div>
}
export default Page;