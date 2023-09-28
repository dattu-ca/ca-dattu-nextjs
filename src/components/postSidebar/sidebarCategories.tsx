import clsx from "clsx";
import {MetaCategory} from "~/models";
import {CategoriesNamesList} from "../category/categoriesNameList";

interface IProps {
    categories: MetaCategory[];
}

const SidebarCategories = ({categories}: IProps) => {
    return <div className={clsx()}>
        <h4>Categories</h4>
        <CategoriesNamesList categories={categories}/>
    </div>
}

export {
    SidebarCategories
}