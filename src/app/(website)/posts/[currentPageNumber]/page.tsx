import { AllPostsComponent } from "~/app.components/allPostsComponent";
import {getCurrentPageNumber, fetchAllPosts} from "./utils";
import {redirect} from "next/navigation";

interface IProps {
    params: {
        currentPageNumber: string;
    }
}
export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const {allPosts} = await fetchAllPosts(currentPage);
    return {
        title: allPosts?.heading || 'Articles'
    }

}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const {allPosts, paginationConfig} = await fetchAllPosts(currentPage);
    
    if(!allPosts){
        redirect('/')
    }
    if(currentPage > paginationConfig.totalPages){
        redirect(`/posts/`)
    }
    
    return <div>
        <AllPostsComponent allPosts={allPosts} paginationConfig={paginationConfig}/>
    </div>
}
export default Page;