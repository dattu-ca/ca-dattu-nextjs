import {MetaCategory} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {MdFolder} from "react-icons/md";

interface IProps {
    categories?: MetaCategory[] | undefined;
}

const CategoriesComponent = ({categories}: IProps) => {
    return categories && Array.isArray(categories) && categories.length > 0 && <>
        <ul className={clsx(
            'space-y-0',
            'list-none',
            'flex gap-4 items-center justify-start flex-wrap',
        )}>
            {
                categories.map(category => (
                    <li key={category.slug}>
                        <Link href={`/category/${category.slug}`}
                        className={clsx(
                            'normal-case text-sm',
                            'daisyui-btn daisyui-btn-sm',
                            'text-zinc-600 dark:text-zinc-400',
                            'bg-zinc-50 dark:bg-black',
                            'hover:after:w-0',
                        )}>
                            <MdFolder className={clsx('translate-y-0')} />
                            <span>{category.displayName}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </>

}

export {
    CategoriesComponent
}