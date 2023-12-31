import {blogPostServices, metaSeriesServices} from "~/services";
import {MetaSeriesComponent} from "~/app.components/metaSeriesComponent";
import {redirect} from "next/navigation";

interface IProps {
    params: {
        slug: string
    }
}

export const revalidate = 86400;
export const dynamic = 'force-dynamic';


export async function generateStaticParams() {
    const slugs = await metaSeriesServices.fetchAllSlugs();

    return slugs.map((slug) => ({
        slug,
    }))
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const series = await metaSeriesServices.fetchBySlug(props.params.slug);
    if(!series || !series.displayName){
        return {};
    }
    const {displayName} = series;
    return {
        title: `${displayName} | Series`
    }
}

const Page = async (props: IProps) => {
    const series = await metaSeriesServices.fetchBySlug(props.params.slug);

    if (!series || !series.sysId) {
        redirect('/')
    }
    
    return <MetaSeriesComponent series={series}/>
}
export default Page;