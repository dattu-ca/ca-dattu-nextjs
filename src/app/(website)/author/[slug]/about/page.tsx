import {blogAuthorServices} from "~/services";
import {BlogAuthorContent} from "~/app.components/blogAuthorComponent/content";

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
        <BlogAuthorContent author={blogAuthor}/>
    </div>
}
export default Page;