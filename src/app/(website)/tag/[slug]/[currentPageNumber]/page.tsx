import {redirect} from 'next/navigation'
import {fetchBySlug, getCurrentPageNumber} from "./utils";
import {MetaTagComponent} from "~/app.components/metaTagComponent";
import {metaTagServices} from "~/services";

interface IProps {
    params: {
        slug: string;
        currentPageNumber: string;
    }
}

export const revalidate = 3600;


export async function generateStaticParams() {
    const slugs = await metaTagServices.fetchAllSlugs();

    return slugs.map((slug) => ({
        slug,
        currentPageNumber: "1"
    }))
}


export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchBySlug(props.params.slug, currentPage)

    if (!data || !data?.tag) {
        return {}
    }
    return {
        title: data.tag.name
    }

}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchBySlug(props.params.slug, currentPage);

    if (!data.tag || !data.paginationConfig) {
        redirect('/')
    }

    if (currentPage > data.paginationConfig.totalPages) {
        redirect(`/tag/${props.params.slug}`)
    }

    return <div>
        <MetaTagComponent tag={data.tag} paginationConfig={data.paginationConfig}/>
    </div>
}
export default Page;