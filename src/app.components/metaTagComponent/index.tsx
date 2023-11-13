import {MetaTag} from "~/models";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import clsx from "clsx";
import {H1Heading} from "~/app.ui.components/h1Heading";
// import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
// import Link from "next/link";
import {FaHashtag} from "react-icons/fa6";
import {PostsListComponent} from "../bodyPostsListComponent/postsListComponent";

interface IProps {
    tag: MetaTag
}

const MetaTagComponent = ({tag}: IProps) => {
    if (!tag) {
        return null;
    }

    return <div>
        <BlocksBodyContentComponent blocks={tag.preHeadingContentBlocks} isExcerpts={true}/>
        <div className={clsx(
            'mt-8'
        )}>
            {/*<DefaultBlocksLayout>*/}
            {/*    <div className="text-sm daisyui-breadcrumbs">*/}
            {/*        <ul>*/}
            {/*            <li>*/}
            {/*                <Link href='/tags' className={clsx('hover:!no-underline')}>All Tags</Link>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</DefaultBlocksLayout>*/}
            <H1Heading>
                <div className={clsx('flex items-center')}>
                    <FaHashtag aria-label='#'/> {tag.name}
                </div>
            </H1Heading>
        </div>
        <div className={clsx(
            {
                ['mt-8']: (tag.contentBlocks || []).length > 0
            }
        )}>
            <BlocksBodyContentComponent blocks={tag.contentBlocks} isExcerpts={true}/>
        </div>
        <PostsListComponent
            postsListData={tag.postsListData}
            className={clsx(
                'mt-8'
            )}/>
    </div>
}

export {
    MetaTagComponent
}