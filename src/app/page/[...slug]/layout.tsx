import React, {ReactElement} from "react";
import clsx from "clsx";
import {blogPageServices} from "~/services";
import {BannerComponent} from "~/components/banner";


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


const Layout = async ({children}: IProps) => {
    return <div>
        {children}
    </div>
}

export default Layout;