import React, {ReactElement} from "react";
import {blogPageServices} from "~/services";


interface IProps {
    children?: ReactElement;
    params: {
        slug: string | string[];
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogPageServices.fetchBySlug(Array.isArray(slug) ? slug.join('/') : slug);
    const {heading} = data;
    return {
        title: heading
    }
}

const Layout = ({children}: IProps) => children;

export default Layout;