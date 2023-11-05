import {fetchBySlug, getCurrentPageNumber} from "~/app/(website)/tag/[slug]/[currentPageNumber]/utils";
import {MetaTagComponent} from "~/app.components/metaTagComponent";

interface IProps {
    params: {
        slug: string;
        currentPageNumber: string;
    }
}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchBySlug(props.params.slug, currentPage);
    
    if(!data.tag || !data.paginationConfig){
        return null;
    }

    return <div>
        <MetaTagComponent tag={data.tag} paginationConfig={data.paginationConfig} />
    </div>
}
export default Page;