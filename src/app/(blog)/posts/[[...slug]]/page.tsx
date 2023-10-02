import {blogPageServices} from "~/services";
import {BlogPageComponent} from "~/app.components/blogPageComponent";


interface IProps {
    params: {
        slug: string;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;

    return <div>
        <pre>{JSON.stringify(slug, null, 2)}</pre>
    </div>
}
export default Page;