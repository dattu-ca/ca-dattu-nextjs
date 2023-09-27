import {PageComponent} from "~/components/Page";

import {blogPageServices} from "~/services";


interface IProps {
    params: {
        slug: string | string[];
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogPageServices.fetchBySlug(Array.isArray(slug) ? slug.join('/') : slug);
    return <div>
        <PageComponent data={data}/>
    </div>
}
export default Page;