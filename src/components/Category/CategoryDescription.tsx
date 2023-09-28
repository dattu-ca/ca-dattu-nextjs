import React from "react";
import clsx from "clsx";
import Link from "next/link";
import {MetaCategory, CreateCategoryBreadCrumbs} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";



interface IProps {
    category: MetaCategory,
}

const CategoryDescription = ({category}: IProps) => {
    const {name, description} = category;
    const breadcrumbs = CreateCategoryBreadCrumbs(category);
    return <section className={clsx()}>
        {
            breadcrumbs.length > 1
            && (
                <div className={clsx()}>
                    <ul className={clsx()}>
                        {
                            breadcrumbs.map((breadcrumb, index) => (
                                <li key={breadcrumb.slug}>
                                    {
                                        index === breadcrumbs.length - 1
                                            ? (
                                                <span/>
                                            )
                                            : (
                                                <Link href={`/category/${breadcrumb.slug}`}
                                                      className={clsx()}>
                                                    <span>{breadcrumb.name}</span>
                                                </Link>
                                            )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }

        <h4 className={clsx()}>
            <AiTwotoneFolderOpen className={clsx()}/>
            <span>{name}</span>
        </h4>

        <CustomRichTexRenderer document={description}/>
    </section>
}

export {
    CategoryDescription
}