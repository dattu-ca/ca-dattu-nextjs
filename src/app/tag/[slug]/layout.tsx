import React, {ReactElement} from "react";
import clsx from "clsx";
import {metaTagServices} from "~/services";
import {MetaTag} from "~/models";
import {TagDescription} from "~/components/Tag/TagDescription";


interface IProps {
    children: ReactElement;
    params: {
        slug: string;
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const category = await metaTagServices.fetchBySlug(slug as string) as MetaTag;
    const {name} = category;
    return {
        title: name
    }
}

const Layout = async ({children, params: {slug}}: IProps) => {
    const tag = await metaTagServices.fetchBySlug(slug as string) as MetaTag;
    return <div>

        <div className={clsx()}>
            <div>
                <h1>{tag.name}</h1>
            </div>
        </div>
        <div className={clsx()}>
            <section className={clsx()}>
                {children}
            </section>
            <div className={clsx()}>
                <TagDescription tag={tag} />
            </div>
        </div>
    </div>
}
export default Layout;