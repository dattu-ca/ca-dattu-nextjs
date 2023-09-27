import React from "react";
import clsx from "clsx";
import Link from "next/link";
import {MetaCategory, CreateCategoryBreadCrumbs} from "~/models";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";
import {AiTwotoneFolderOpen} from "react-icons/ai";


interface IProps {
    category: MetaCategory,
}

const CategoryDescription = ({category}: IProps) => {
    const {name, description} = category;
    const breadcrumbs = CreateCategoryBreadCrumbs(category);
    return <section className={clsx(
        'bg-white p-4 md:p-8',
        'shadow-md'
    )}>
        {
            breadcrumbs.length > 1
            && (
                <div className="text-sm daisyui-breadcrumbs">
                    <ul className={clsx(
                        'p-0 m-0',
                        'flex-wrap'
                    )}>
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
                                                      className={clsx(
                                                          'flex flex-wrap gap-2',
                                                          'items-center',
                                                      )}>
                                                    <AiTwotoneFolderOpen className={'w-4 h-4'}/>
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

        <h4 className={clsx(
            'mb-4',
            'flex flex-wrap gap-2',
            'items-center'
        )}>
            <AiTwotoneFolderOpen className={'w-8 h-8'}/>
            <span>{name}</span>
        </h4>

        <CustomRichTexRenderer document={description}/>
    </section>
}

export {
    CategoryDescription
}