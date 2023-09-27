import {MetaCategory} from "~/models";
import {CategoriesNamesList} from "~/components/Category/CategoriesNameList";
import clsx from "clsx";

interface IProps {
    categories: MetaCategory[];
}

const SidebarCategories = ({categories}: IProps) => {
    return <div className={clsx(
        'bg-white p-4 md:p-8',
        'shadow-md'
    )}>
        <h4>Categories</h4>
        <CategoriesNamesList categories={categories}/>
    </div>
}

export {
    SidebarCategories
}