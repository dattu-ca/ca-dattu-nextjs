import {MetaCategory} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {MdFolder} from "react-icons/md";
import {DividerComponent} from "~/app.ui.components/dividerComponent";

interface IProps {
    category: MetaCategory;
}

const MetaCategoryChildrenComponent = ({category}: IProps) => {
    if (!category) {
        return null;
    }

    return category.children && category.children.length > 0 && (
        <DividerComponent allFormats={'Default'}>
            <h6>Sub Categories</h6>
            <ul className={clsx(
                'space-y-0',
                'list-none',
                'flex gap-4 items-center justify-start flex-wrap',
            )}>
                {
                    category.children.map(category => (
                        <li key={category.slug}>
                            <Link href={`/category/${category.slug}`}
                                  className={clsx(
                                      'normal-case',
                                      'daisyui-btn daisyui-btn-sm',
                                      'text-zinc-600 dark:text-zinc-400',
                                      'bg-zinc-50 dark:bg-black',
                                      'hover:after:w-0'
                                  )}>
                                <MdFolder/>
                                {category.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </DividerComponent>
    )
}

export {
    MetaCategoryChildrenComponent
}