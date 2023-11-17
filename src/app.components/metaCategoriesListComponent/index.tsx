import {MetaCategory} from "~/models";
import clsx from "clsx";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import Link from "next/link";
import {MdFolderOpen} from "react-icons/md";
import {Fragment} from "react";

interface IProps {
    categories: MetaCategory[]
}

interface IPropsChild {
    category: MetaCategory
}

const MetaCategoriesListComponent = ({categories}: IProps) => {

    const RenderTree = ({category}: IPropsChild) => {
        return <li>
            <Link href={`/category/${category.slug}`}
                  className={clsx('inline-flex items-center gap-1')}>
                <MdFolderOpen/> <span>{category.displayName} ({category.totalPosts})</span>
            </Link>
            {
                category.children && <ul>
                    {
                        category.children.map(child => <Fragment key={child.sysId}><RenderTree category={child}/></Fragment>)
                    }
                </ul>
            }
        </li>
    }


    return <div>
        <div className={clsx(
            'mt-8'
        )}>
            <H1Heading>
                <span>All Categories</span>
            </H1Heading>
        </div>
        <div className={clsx(
            'mt-8'
        )}>
            <ul>
                <DefaultBlocksLayout>
                    {
                        categories.map(category => (
                            <Fragment key={category.slug}><RenderTree category={category}/></Fragment>))
                    }
                </DefaultBlocksLayout>
            </ul>
        </div>
    </div>
}

export {
    MetaCategoriesListComponent
}