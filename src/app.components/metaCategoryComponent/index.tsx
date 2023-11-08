import {createParentBreadCrumbs, MetaCategory, PaginationConfig} from "~/models";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import clsx from "clsx";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import Link from "next/link";
import {CategoryPostsListComponent} from "./postsListComponent";
import {MdFolder, MdFolderOpen} from "react-icons/md";

interface IProps {
    category: MetaCategory;
    paginationConfig: PaginationConfig
}

const MetaCategoryComponent = ({category, paginationConfig}: IProps) => {
    if (!category) {
        return null;
    }

    return <div>
        <BlocksBodyContentComponent blocks={category.preHeadingContentBlocks} isExcerpts={true}/>
        <div className={clsx(
            'mt-8'
        )}>
            {
                category.parent && (
                    <DefaultBlocksLayout>
                        <div className="text-sm daisyui-breadcrumbs">
                            <ul className={clsx('space-y-0')}>
                                {
                                    createParentBreadCrumbs(category).reverse().map(p => <li key={p.slug}>
                                        <Link href={`/category/${p.slug}`}
                                              className={clsx('hover:!no-underline')}>{p.name}</Link>
                                    </li>)
                                }
                            </ul>
                        </div>
                    </DefaultBlocksLayout>
                )
            }
            <H1Heading>
                <div className={clsx('flex items-center')}>
                    <MdFolderOpen/> {category.name}
                </div>
            </H1Heading>
            {
                category.children && (
                    <div>
                        <DefaultBlocksLayout allFormats={'Default'}>
                            <div className="daisyui-divider"></div>
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
                            <div className="daisyui-divider"></div>
                        </DefaultBlocksLayout>
                    </div>
                )
            }
        </div>
        <div className={clsx(
            {
                ['mt-8']: (category.contentBlocks || []).length > 0
            }
        )}>
            <BlocksBodyContentComponent blocks={category.contentBlocks} isExcerpts={true}/>
        </div>
        <div className={clsx(
            {
                ['mt-8']: category.postsLists?.length > 0
            }
        )}>
            <CategoryPostsListComponent paginationData={paginationConfig} posts={category.postsLists}/>
        </div>
    </div>
}

export {
    MetaCategoryComponent
}