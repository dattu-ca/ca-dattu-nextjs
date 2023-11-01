import {ReactElement} from "react";
import {blogAuthorServices} from "~/services";
import {BlogAuthorPreHeadingContent} from "~/app.components/blogAuthorComponent/preHeadingContent";
import {BlogAuthorHeader} from "~/app.components/blogAuthorComponent/header";

interface IProps {
    params: {
        slug: string
    }
    children?: ReactElement | ReactElement[];
}

export const generateMetadata = async ({params}: IProps) => {
    const {slug} = params;
    const blogAuthor = await blogAuthorServices.fetchBySlug(slug);
    if (!blogAuthor) {
        return {};
    }
    const {name} = blogAuthor;
    return {
        title: name
    }
}

const Layout = async ({params, children}: IProps) => {
    const {slug} = params;
    const blogAuthor = await blogAuthorServices.fetchBySlug(slug);
    if (!blogAuthor) {
        return null;
    }


    return <div>
        <BlogAuthorPreHeadingContent author={blogAuthor}/>
        <BlogAuthorHeader author={blogAuthor}/>
        {children}
    </div>
}
export default Layout;