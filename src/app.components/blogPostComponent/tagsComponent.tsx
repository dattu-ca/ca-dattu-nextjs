import { FaHashtag } from 'react-icons/fa6';
import {MetaTag} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    tags?: MetaTag[] | undefined;
}

const TagsComponent = ({tags}: IProps) => {
    return tags && Array.isArray(tags) && tags.length > 0 && <DefaultBlocksLayout>
        <ul className={clsx(
            'space-y-0',
            'list-none',
            'flex gap-4 items-center justify-start',
        )}>
            {
                tags.map(tag => (
                    <li key={tag.slug}>
                        <Link href={`/tag/${tag.slug}`}
                              className={clsx(
                                  'normal-case text-sm',
                                  'daisyui-btn daisyui-btn-outline daisyui-btn-sm',
                                  'dark:border-white dark:text-white dark:hover:text-black',
                                  'hover:after:w-0'
                              )}>
                             <FaHashtag aria-label='#' />{tag.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </DefaultBlocksLayout>

}

export {
    TagsComponent
}