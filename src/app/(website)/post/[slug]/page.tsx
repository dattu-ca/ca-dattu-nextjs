import {BlogPostComponent} from "~/app.components/blogPostComponent";
import {blogPostServices} from "~/services";

interface IProps {
    params: {
        slug: string | string []
    }
}


export const dynamic = 'force-dynamic';


const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const blogPost = await blogPostServices.fetchBySlug(Array.isArray(slug) ? slug.join('/') : slug);
    if (!blogPost) {
        return null;
    }


    return <BlogPostComponent blogPost={blogPost}/>
}
export default Page;