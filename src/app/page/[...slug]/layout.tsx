import React, {ReactElement} from "react";
import clsx from "clsx";
import {blogPageServices} from "~/services";
import {BannerComponent} from "~/components/Banner";


interface IProps {
    children: ReactElement;
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


const Layout = async ({children, params: {slug}}: IProps) => {
    const data = await blogPageServices.fetchBySlug(Array.isArray(slug) ? slug.join('/') : slug);
    const {banners} = data;

    return <div>
        <BannerComponent banners={banners}/>
        <div className={clsx()}>
            <section className={clsx()}>
                {children}
            </section>
        </div>
    </div>
}

export default Layout;