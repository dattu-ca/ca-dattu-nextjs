import {Fragment} from "react";
import Link from "next/link";
import {MetaCategory} from "~/models";


interface IProps {
    categories: MetaCategory[];
}


const CategoriesNamesList = ({categories}: IProps) => {
    return categories &&
        categories.length > 0 &&
        categories.map((category, index) => (
            <Fragment key={category.slug}>
                <Link href={`/category/${category.slug}`}>{category.name}</Link>
                {
                    (index < categories.length - 1) && <span>, </span>
                }
            </Fragment>
        ))

}

export {
    CategoriesNamesList
}