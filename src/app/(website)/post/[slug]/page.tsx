import {BlogPostComponent} from "~/app.components/blogPostComponent";
import { blogPostServices} from "~/services";
import {redirect} from "next/navigation";

interface IProps {
    params: {
        slug: string
    }
}

export const revalidate = 86400;

export async function generateStaticParams() {
    const slugs = await blogPostServices.fetchAllActiveSlugs();

    return slugs.map((slug) => ({
        slug,
    }))
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogPostServices.fetchBySlug(slug);
    if(!data){
        return {};
    }
    const {heading} = data;
    return {
        title: `${heading} | Article`
    }
}

const Page = async ({params: {slug}}: IProps) => {
    const blogPost = await blogPostServices.fetchBySlug(slug);
    if (!blogPost) {
        redirect('/')
    }


    return <BlogPostComponent blogPost={blogPost}/>
}
export default Page;