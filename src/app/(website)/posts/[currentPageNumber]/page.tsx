import {redirect} from "next/navigation";
import {AllPostsComponent} from "~/app.components/allPostsComponent";
import {getCurrentPageNumber, fetchAllPosts} from "./utils";

interface IProps {
    params: {
        currentPageNumber: string;
    }
}

export const revalidate = 86400;

export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const allPosts = await fetchAllPosts(currentPage);
    return {
        title: `${allPosts?.heading || 'Articles'}`
    }

}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const allPosts = await fetchAllPosts(currentPage);

    if (!allPosts) {
        redirect('/')
    }

    const paginationConfig = allPosts.postsListData?.paginationData;
    if (paginationConfig && currentPage > paginationConfig.totalPages) {
        redirect(`/posts/`)
    }

    return <AllPostsComponent allPosts={allPosts}/>
}
export default Page;