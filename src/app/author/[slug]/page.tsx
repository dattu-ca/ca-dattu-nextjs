import {AuthorComponent} from "~/components/Author";

import {blogAuthorServices} from "~/services";


interface IProps {
    params: {
        slug: string | string[];
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogAuthorServices.fetchBySlug(slug as string);
    return <p>List of posts by this author: {data.name}</p>
}
export default Page;