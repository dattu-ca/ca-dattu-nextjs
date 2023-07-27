import {PageComponent} from "~/components/Page";
import {getBlogPage} from "~/services";
import {CONTENTFUL_SLUGS} from "~/utils/constants";

const Page = async () => {
    const data = await getBlogPage(CONTENTFUL_SLUGS.HOME_PAGE);
    return <PageComponent data={data}/>
}

export default Page;
