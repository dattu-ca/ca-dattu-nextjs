import {PageComponent} from "~/components/Page";

import {getBlogPage} from "~/services";


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

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await getBlogPage(slug);
    return <PageComponent data={data}/>
}
export default Page;