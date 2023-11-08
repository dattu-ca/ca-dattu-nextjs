import {BlogPostComponent} from "~/app.components/blogPostComponent";
import {blogPostServices} from "~/services";
import {redirect} from "next/navigation";

interface IProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const slugs = await blogPostServices.fetchAllActiveSlugs();

    return slugs.map((slug) => ({
        slug,
    }))
}

const Page = async ({params: {slug}}: IProps) => {
    const blogPost = await blogPostServices.fetchBySlug(slug);
    if (!blogPost) {
        redirect('/')
    }


    return <BlogPostComponent blogPost={blogPost}/>
}
export default Page;