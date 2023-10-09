import {fetchPost} from "./utils";
import {BlogPostComponent} from "~/app.components/blogPostComponent";
import {BlogPost} from "~/models";


interface IProps {
    params: {
        slug: string;
    }
}

const Page = async (props: IProps) => {
    const data = await fetchPost(props.params.slug, false) as BlogPost;
    if(!data){
        return null;
    }
    return <BlogPostComponent blogPost={data}/>
}
export default Page;