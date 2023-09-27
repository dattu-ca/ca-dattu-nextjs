import React, {ReactElement} from "react";
import clsx from "clsx";
import {blogPostServices} from "~/services";
import {BannerComponent} from "~/components/Banner";
import {PostSidebarComponent} from "~/components/PostSidebar";
import {BlogPost} from "~/models";


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
    const post = await blogPostServices.fetchBySlug(slug as string) as BlogPost;
    const seriesPosts = post.series ? await blogPostServices.fetchListBySeries(post.series.sysId as string) as BlogPost[] : undefined;
    const {banners} = post;

    return <div>
        <BannerComponent banners={banners}/>
        <div className={clsx(
            'mt-4 md:mt-8',
            'wrapper-with-sidebar',
            'pb-4 md:pb-8',
        )}>
            <section className={clsx(
                'container',
            )}>

                {children}
            </section>
            <section className={clsx(
                'sidebar'
            )}>
                <PostSidebarComponent 
                    post={post}
                    seriesPosts={seriesPosts}
                />
            </section>
        </div>
    </div>
}

export default Layout;