import { AllPostsComponent } from "~/app.components/allPostsComponent";
import {getCurrentPageNumber, fetchAllPosts} from "./utils";

interface IProps {
    params: {
        currentPageNumber: string;
    }
}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const {allPosts, paginationConfig} = await fetchAllPosts(currentPage);
    
    

    return <div>
        <AllPostsComponent allPosts={allPosts} paginationConfig={paginationConfig}/>
    </div>
}
export default Page;