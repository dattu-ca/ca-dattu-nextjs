import {fetchBySlug, getCurrentPageNumber} from "./utils";
import {MetaCategoryComponent} from "~/app.components/metaCategoryComponent";
import { metaCategoryServices} from "~/services";
import {redirect} from "next/navigation";

interface IProps {
    params: {
        slug: string;
        currentPageNumber: string;
    }
}

export async function generateStaticParams() {
    const slugs = await metaCategoryServices.fetchAllSlugs();

    return slugs.map((slug) => ({
        slug,
        currentPageNumber: "1"
    }))
}

export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchBySlug(props.params.slug, currentPage)

    if (!data || !data?.category) {
        return {}
    }
    return {
        title: data.category.name
    }

}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const data = await fetchBySlug(props.params.slug, currentPage)


    if(!data.category || !data.paginationConfig){
        redirect('/')
    }

    if(currentPage > data.paginationConfig.totalPages){
        redirect(`/category/${props.params.slug}`)
    }

    return <div>
        <MetaCategoryComponent category={data.category} paginationConfig={data.paginationConfig} />
    </div>
}
export default Page;