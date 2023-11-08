import {metaSeriesServices} from "~/services";
import {MetaSeriesComponent} from "~/app.components/metaSeriesComponent";
import {redirect} from "next/navigation";

interface IProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const slugs = await metaSeriesServices.fetchAllSlugs();

    return slugs.map((slug) => ({
        slug,
    }))
}

const Page = async (props: IProps) => {
    const {series} = await metaSeriesServices.fetchBySlug(props.params.slug);

    if (!series || !series.sysId) {
        redirect('/')
    }
    
    return <MetaSeriesComponent series={series}/>
}
export default Page;