import {createParentBreadCrumbs, MetaCategory} from "~/models";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import clsx from "clsx";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import Link from "next/link";
import {PostsListComponent} from "../bodyPostsListComponent/postsListComponent";
import {MdFolderOpen} from "react-icons/md";
import {MetaCategoryChildrenComponent} from "./childrenCategories";

interface IProps {
    category: MetaCategory;
}

const MetaCategoryComponent = ({category}: IProps) => {
    if (!category) {
        return null;
    }

    return <div>
        <BlocksBodyContentComponent blocks={category.preHeadingContentBlocks} isExcerpts={true}/>
        <div className={clsx(
            'mt-8'
        )}>
            <DefaultBlocksLayout allFormats='Default'>
                <div className="text-sm daisyui-breadcrumbs">
                    <ul className={clsx('space-y-0')}>
                        <li>
                            <Link href={`/categories`}
                                  className={clsx('hover:!no-underline')}>
                                All Categories
                            </Link>
                        </li>
                        {
                            category.parent && createParentBreadCrumbs(category).reverse().map(p => <li key={p.slug}>
                                <Link href={`/category/${p.slug}`}
                                      className={clsx('hover:!no-underline')}>{p.displayName}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </DefaultBlocksLayout>
            <H1Heading>
                <div className={clsx('flex items-start gap-1')}>
                    <div className={clsx('pt-2')}><MdFolderOpen/></div>
                    <span>{category.displayName}</span>
                </div>
            </H1Heading>
            <MetaCategoryChildrenComponent category={category}/>
        </div>
        <div className={clsx(
            {
                ['mt-8']: (category.contentBlocks || []).length > 0
            }
        )}>
            <BlocksBodyContentComponent blocks={category.contentBlocks} isExcerpts={true}/>
        </div>
        <PostsListComponent postsListData={category.postsListData}
                            className={clsx(
                                'mt-8'
                            )}/>
    </div>
}

export {
    MetaCategoryComponent
}