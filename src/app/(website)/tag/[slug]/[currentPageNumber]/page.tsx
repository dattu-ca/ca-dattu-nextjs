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

export const revalidate = 86400;


// export async function generateStaticParams() {
//     const slugs = await metaTagServices.fetchAllSlugs();
//
//     return slugs.map((slug) => ({
//         slug,
//         currentPageNumber: "1"
//     }))
// }


export const generateMetadata = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const tag = await fetchBySlug(props.params.slug, currentPage)

    if (!tag || !tag.name) {
        return {}
    }
    return {
        title: tag.name
    }

}

const Page = async (props: IProps) => {
    const currentPage = getCurrentPageNumber(props.params);
    const tag = await fetchBySlug(props.params.slug, currentPage);

    if (!tag || !tag.sysId) {
        redirect('/')
    }

    const paginationConfig = tag.postsListData?.paginationData;
    if (paginationConfig && currentPage > paginationConfig.totalPages) {
        redirect(`/tag/${props.params.slug}`)
    }

    return <MetaTagComponent tag={tag} />
}
export default Page;