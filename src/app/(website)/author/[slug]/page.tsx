
import {blogAuthorServices} from "~/services";

interface IProps {
    params: {
        slug: string
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const blogAuthor = await blogAuthorServices.fetchBySlug(slug);
    if (!blogAuthor) {
        return null;
    }


    return <div>
        <pre>{JSON.stringify(blogAuthor, null, 2)}</pre>
    </div>
}
export default Page;