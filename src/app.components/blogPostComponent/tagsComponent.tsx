import {MetaTag} from "~/models";
import {MetaContainer} from "./metaContainer";
import clsx from "clsx";
import Link from "next/link";

interface IProps {
    tags?: MetaTag[] | undefined;
}

const TagsComponent = ({tags}: IProps) => {
    return tags && Array.isArray(tags) && tags.length > 0 && <MetaContainer>
        <ul className={clsx(
            'space-y-0',
            'list-none',
            'flex gap-4 items-center justify-start',
        )}>
            {
                tags.map(tag => (
                    <li key={tag.slug}>
                        <Link href={`/tag/${tag.name}`}
                              className={clsx(
                                  'normal-case text-sm',
                                  'daisyui-btn daisyui-btn-outline daisyui-btn-sm',
                                  'dark:border-white dark:text-white dark:hover:text-black',
                                  'hover:after:w-0'
                              )}>
                            #{tag.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </MetaContainer>

}

export {
    TagsComponent
}