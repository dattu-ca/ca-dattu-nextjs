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

    if (!category || !category.name) {
        return {}
    }
    return {
        title: category.name
    }

}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const category = await fetchBySlug(props.params.slug, currentPage)


    if(!category || !category.postsListData){
        redirect('/')
    }
    
    const paginationConfig = category.postsListData?.paginationData;
    if (paginationConfig && currentPage > paginationConfig.totalPages) {
        redirect(`/category/${props.params.slug}`)
    }

    return <div>
        <MetaCategoryComponent category={category} />
    </div>
}
export default Page;