import {PaginatedComponent} from "../../paginatedComponent";


interface IProps {
    params: {
        slug: string;
        currentPage: number;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug, currentPage: paramCurrentPage} = params;
    const currentPage = paramCurrentPage ? +paramCurrentPage : 1;
    
    return <div>
        <PaginatedComponent currentPage={currentPage} slug={slug}/>
    </div>
}
export default Page;