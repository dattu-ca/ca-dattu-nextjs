import {AuthorComponent} from "~/components/author";

import {blogAuthorServices} from "~/services";


interface IProps {
    params: {
        slug: string;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogAuthorServices.fetchBySlug(slug as string);
    return <div>
        <AuthorComponent author={data}/>
    </div>
}
export default Page;