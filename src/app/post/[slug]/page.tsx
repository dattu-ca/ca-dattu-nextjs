import {PostComponent} from "~/components/Post";

import {blogPostServices} from "~/services";


interface IProps {
    params: {
        slug: string | string[];
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogPostServices.fetchBySlug(slug as string);
    const {heading} = data;
    return {
        title: heading
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogPostServices.fetchBySlug(slug as string);
    return <PostComponent data={data}/>
}
export default Page;