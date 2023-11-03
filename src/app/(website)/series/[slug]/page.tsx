import {metaSeriesServices} from "~/services";
import {MetaSeriesComponent} from "~/app.components/metaSeriesComponent";

interface IProps {
    params: {
        slug: string
    }
}

const Page = async (props: IProps) => {
    const data = await metaSeriesServices.fetchBySlug(props.params.slug)
    if (!data) {
        return null;
    }
    return <MetaSeriesComponent series={data}/>
}
export default Page;