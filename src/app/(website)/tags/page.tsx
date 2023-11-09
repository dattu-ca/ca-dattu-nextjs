import {metaTagServices} from "~/services";
import {MetaTagsListComponent} from "~/app.components/metaTagsListComponent";

interface IProps {
    params: {}
}

export const revalidate = 3600;


const Page = async (props: IProps) => {
    const result = await metaTagServices.fetchAllActiveTags();
    return <MetaTagsListComponent tags={result}/>
}
export default Page;