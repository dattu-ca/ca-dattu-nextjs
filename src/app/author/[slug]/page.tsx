import {AuthorComponent} from "~/components/Author";

import {blogAuthorServices} from "~/services";


interface IProps {
    params: {
        slug: string | string[];
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogAuthorServices.fetchBySlug(slug as string);
    const {name} = data;
    return {
        title: `Author: ${name}`
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogAuthorServices.fetchBySlug(slug as string);
    return <AuthorComponent author={data} />
}
export default Page;