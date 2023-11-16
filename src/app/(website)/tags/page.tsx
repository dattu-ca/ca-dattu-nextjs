import {metaTagServices} from "~/services";
import {MetaTagsListComponent} from "~/app.components/metaTagsListComponent";
import {redirect} from "next/navigation";

interface IProps {
    params: {}
}

export const revalidate = 86400;

export const metadata = {
    title: 'All Tags'
}

const Page = async (props: IProps) => {
    const result = await metaTagServices.fetchAllActiveTags();
    if (!result || !Array.isArray(result) || result.length === 0) {
        redirect('/')
    }
    return <MetaTagsListComponent tags={result}/>
}
export default Page;