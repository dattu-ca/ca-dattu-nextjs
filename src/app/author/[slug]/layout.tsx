import React, {ReactElement} from "react";
import clsx from "clsx";
import {blogAuthorServices} from "~/services";
import {AuthorShortBioComponent} from "~/components/author/authorShortBio";
import {BannerComponent} from "~/components/banner";
import {AuthorNavigation} from "./navigation";

interface IProps {
    children: ReactElement | ReactElement[];
    params: {
        slug: string;
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const data = await blogAuthorServices.fetchBySlug(slug as string);
    const {name} = data;
    return {
        title: name
    }
}

const Layout = async ({children, params: {slug}}: IProps) => {
    const author = await blogAuthorServices.fetchBySlug(slug as string);
    const {banners} = author;
    return <div>
        {
            banners && <BannerComponent banners={banners}/>
        }
        <div className={clsx()}>
            <div>
                <h1>{author.name}</h1>
                <AuthorNavigation slug={slug}/>
            </div>
        </div>
        <div className={clsx()}>
            <div className={clsx()}>
                
                {children}
            </div>
            <div className={clsx()}>
                <AuthorShortBioComponent author={author} showNameAsALink={false}/>
            </div>
        </div>
    </div>
}
export default Layout;