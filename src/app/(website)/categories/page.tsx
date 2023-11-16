import {metaCategoryServices} from "~/services";
import {MetaCategoriesListComponent} from "~/app.components/metaCategoriesListComponent";


export const revalidate = 86400;

export const metadata = {
    title: 'All Categories'
}

const Page = async () => {
   const categories = await metaCategoryServices.fetchAllCategories();
    return <MetaCategoriesListComponent categories={categories}/>
}

export default Page;