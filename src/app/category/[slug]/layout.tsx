import React, {ReactElement} from "react";
import clsx from "clsx";
import {metaCategoryServices} from "~/services";
import {MetaCategory} from "~/models";
import {CategoryDescription} from "~/components/category/categoryDescription";



interface IProps {
    children: ReactElement | ReactElement[];
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

        <div className={clsx()}>
            <div className={clsx()}>
                <h1 className={clsx()}>{category.name}</h1>
            </div>
        </div>
        <div className={clsx()}>
            <div className={clsx()}>
                {children}
            </div>
            <div className={clsx()}>
                <CategoryDescription category={category} />
            </div>
        </div>
    </div>
}
export default Layout;