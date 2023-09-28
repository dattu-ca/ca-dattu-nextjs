import Link from "next/link";
import {MetaCategory} from "~/models";
import clsx from "clsx";
import {AiTwotoneFolderOpen} from "react-icons/ai";


interface IProps {
    categories: MetaCategory[];
}


const CategoriesNamesList = ({categories}: IProps) => {
    return categories &&
        categories.length > 0 &&
        <div className={clsx()}>
            {
                categories.map((category, index) => (
                    <div key={category.slug}>
                        <Link href={`/category/${category.slug}`}
                              className={clsx()}>
                            <AiTwotoneFolderOpen className={clsx()}/>
                            {category.name}
                        </Link>
                    </div>
                ))
            }
        </div>
        

}

export {
    CategoriesNamesList
}