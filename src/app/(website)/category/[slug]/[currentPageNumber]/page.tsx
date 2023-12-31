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

export const revalidate = 86400;
export const dynamic = 'force-dynamic';


export async function generateStaticParams() {
    const slugs = await metaCategoryServices.fetchAllSlugs();

    return slugs.map((slug) => ({
        slug,
        currentPageNumber: "1"
    }))
}

export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const category = await fetchBySlug(props.params.slug, currentPage)

    if (!category || !category.displayName) {
        return {}
    }
    return {
        title: `${category.displayName} | Category`
    }

}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const category = await fetchBySlug(props.params.slug, currentPage)


    if(!category || !category.sysId){
        redirect('/')
    }
    
    const paginationConfig = category.postsListData?.paginationData;
    if (paginationConfig && currentPage > paginationConfig.totalPages) {
        redirect(`/category/${props.params.slug}`)
    }

    return <MetaCategoryComponent category={category} />
}
export default Page;