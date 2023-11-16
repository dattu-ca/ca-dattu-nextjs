import {redirect} from "next/navigation";
import {fetchAuthorPosts} from "./utils";
import {PostsListComponent} from "~/app.components/bodyPostsListComponent/postsListComponent";

interface IProps {
    params: {
        slug: string,
        currentPageNumber: string;
    }
}

export const revalidate = 86400;
export const dynamic = 'force-dynamic';

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

    return <PostsListComponent postsListData={author.postsListData}/>
}
export default Page;