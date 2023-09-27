import React, {ReactElement} from "react";
import clsx from "clsx";
import {metaCategoryServices} from "~/services";
import {MetaCategory} from "~/models";
import {CategoryDescription} from "~/components/Category/CategoryDescription";


interface IProps {
    children: ReactElement;
    params: {
        slug: string;
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    const category = await metaCategoryServices.fetchBySlug(slug as string) as MetaCategory;
    const {name} = category;
    return {
        title: name
    }
}

const Layout = async ({children, params: {slug}}: IProps) => {
    const category = await metaCategoryServices.fetchBySlug(slug as string) as MetaCategory;
    return <div>

        <div className={clsx(
            'mt-4 md:mt-8',
            'wrapper-full-width',
        )}>
            <div>
                <h1>{category.name}</h1>
            </div>
        </div>
        <div className={clsx(
            'pb-4 md:pb-8',
            'wrapper-with-sidebar',
        )}>
            <section className={clsx(
                'container',
            )}>
                {children}
            </section>
            <div className={clsx(
                'sidebar'
            )}>
                <CategoryDescription category={category} />
            </div>
        </div>
    </div>
}
export default Layout;