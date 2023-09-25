import {PageComponent} from "~/components/Page";

import {blogPageServices} from "~/services";


interface IProps {
    params: {
        slug: string | string[];
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    
    return {
        title: slug
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    return <div>
        <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
}
export default Page;