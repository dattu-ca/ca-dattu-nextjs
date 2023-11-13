import {metaTagServices} from "~/services";
import {MetaTagsListComponent} from "~/app.components/metaTagsListComponent";
import {redirect} from "next/navigation";
import {MetaTag} from "~/models";

interface IProps {
    params: {}
}

export const revalidate = 86400;


const Page = async (props: IProps) => {
    const result :MetaTag[] = [] ;//await metaTagServices.fetchAllActiveTags();
    if (!result || !Array.isArray(result) || result.length === 0) {
        redirect('/')
    }
    return <MetaTagsListComponent tags={result}/>
}
export default Page;