import {blogPageServices} from "~/services";
import {BlogPageComponent} from "~/app.components/blogPageComponent";
import {redirect} from "next/navigation";


interface IProps {
    params: {
        slug: string | string[];
    }
}

export const revalidate = 86400;
export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
    const slugs = await blogPageServices.fetchAllSlugs();

    return slugs.map((slug) => ({
        slug,
    }))
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogPageServices.fetchBySlug(Array.isArray(slug) ? slug.join('/') : slug);
    if(!data){
        return {};
    }
    const {heading} = data;
    return {
        title: `${heading} | Page`
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;

    const blogPage = await blogPageServices.fetchBySlug(Array.isArray(slug) ? slug.join('/') : slug);
    if (!blogPage) {
        redirect('/')
    }
    return <BlogPageComponent blogPage={blogPage}/>
}
export default Page;