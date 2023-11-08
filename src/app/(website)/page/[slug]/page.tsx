import {blogPageServices} from "~/services";
import {BlogPageComponent} from "~/app.components/blogPageComponent";


interface IProps {
    params: {
        slug: string | string[];
    }
}


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
        title: heading
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