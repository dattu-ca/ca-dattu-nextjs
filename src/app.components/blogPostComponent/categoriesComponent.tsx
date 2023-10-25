import {MetaCategory} from "~/models";
import {MetaContainer} from "./metaContainer";
import clsx from "clsx";
import Link from "next/link";

interface IProps {
    categories?: MetaCategory[] | undefined;
}

const CategoriesComponent = ({categories}: IProps) => {
    return categories && Array.isArray(categories) && categories.length > 0 && <MetaContainer>
        <ul className={clsx(
            'mb-2'
        )}>{

            categories.map(category => (
                <li key={category.slug}><Link href={`/category/${category.name}`}>{category.name}</Link></li>))

        }</ul>
    </MetaContainer>

}

export {
    CategoriesComponent
}