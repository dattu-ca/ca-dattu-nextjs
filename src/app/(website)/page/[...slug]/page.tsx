import {blogPageServices} from "~/services";
import {BlogPageComponent} from "~/app.components/blogPageComponent";


interface IProps {
    params: {
        slug: string | string[];
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;

    const blogPage = await blogPageServices.fetchBySlug(Array.isArray(slug) ? slug.join('/') : slug);
    if (!blogPage) {
        return null;
    }
    return <BlogPageComponent blogPage={blogPage}/>
}
export default Page;