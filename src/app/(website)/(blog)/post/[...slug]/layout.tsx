import React, {ReactElement} from "react";
import {blogPageServices, blogPostServices} from "~/services";


interface IProps {
    children?: ReactElement | ReactElement[];
    params: {
        slug: string | string []
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogPostServices.fetchBySlug(Array.isArray(slug) ? slug.join('/') : slug);

    if (!data) {
        return {};
    }
    const {heading} = data;
    return {
        title: heading
    }
}

const Layout = ({children}: IProps) => children;

export default Layout;