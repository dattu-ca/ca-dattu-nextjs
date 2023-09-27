import {PaginatedComponent} from "./paginatedComponent";


interface IProps {
    params: {
        slug: string;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const currentPage = 1;
    return <div>
        <PaginatedComponent currentPage={currentPage} slug={slug}/>
    </div>
}
export default Page;