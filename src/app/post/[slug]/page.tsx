import {PostComponent} from "~/components/Post";

import {blogPostServices} from "~/services";


interface IProps {
    params: {
        slug: string | string[];
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogPostServices.fetchBySlug(slug as string);
    return <div>
        <PostComponent data={data}/>
    </div>
}
export default Page;