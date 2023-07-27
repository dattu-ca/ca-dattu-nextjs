import {PageComponent} from "~/components/Page";

import {getBlogPage} from "~services/blogPage.services";


interface IProps {
    params: {
        slug: string;
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await getBlogPage(slug);
    const {heading} = data;
    return {
        title: heading
    }
}

const Page = (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    return <PageComponent slug={slug}/>
}
export default Page;