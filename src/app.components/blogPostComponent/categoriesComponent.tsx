import {MetaCategory} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {MdFolder} from "react-icons/md";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    categories?: MetaCategory[] | undefined;
}

const CategoriesComponent = ({categories}: IProps) => {
    return categories && Array.isArray(categories) && categories.length > 0 && <DefaultBlocksLayout>
        <ul className={clsx(
            'space-y-0',
            'list-none',
            'flex gap-4 items-center justify-start',
        )}>
            {
                categories.map(category => (
                    <li key={category.slug}>
                        <Link href={`/category/${category.name}`}
                        className={clsx(
                            'normal-case',
                            'daisyui-btn daisyui-btn-sm',
                            'text-zinc-600 dark:text-zinc-400',
                            'bg-zinc-50 dark:bg-black',
                            'hover:after:w-0'
                        )}>
                            <MdFolder />
                            {category.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </DefaultBlocksLayout>

}

export {
    CategoriesComponent
}