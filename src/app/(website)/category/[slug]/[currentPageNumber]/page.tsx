import {fetchBySlug, getCurrentPageNumber} from "./utils";
import {MetaCategoryComponent} from "~/app.components/metaCategoryComponent";

interface IProps {
    params: {
        slug: string;
        currentPageNumber: string;
    }
}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchBySlug(props.params.slug, currentPage)


    if(!data.category || !data.paginationConfig){
        return null;
    }

    return <div>
        <MetaCategoryComponent category={data.category} paginationConfig={data.paginationConfig} />
    </div>
}
export default Page;