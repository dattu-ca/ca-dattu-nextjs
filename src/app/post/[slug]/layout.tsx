import React, {ReactElement} from "react";
import clsx from "clsx";
import {blogPostServices} from "~/services";
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
    const data = await blogPostServices.fetchBySlug(slug as string);
    const {heading} = data;
    return {
        title: heading
    }
}


const Layout = async ({children, params: {slug}}: IProps) => {
    const data = await blogPostServices.fetchBySlug(slug as string);
    const {banners} = data;
    
    return <div>
        <BannerComponent banners={banners} />
        <div className={clsx(
            'mt-4 md:mt-8',
            'wrapper-with-sidebar',
            'pb-4 md:pb-8',
        )}>
            <div className={clsx(
                'container',
            )}>

                {children}
            </div>
        </div>
    </div>
}

export default Layout;