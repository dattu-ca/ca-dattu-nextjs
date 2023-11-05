import {MetaTag} from "~/models";
import clsx from "clsx";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import Link from "next/link";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {FaHashtag} from "react-icons/fa6";

interface IProps {
    tags: MetaTag[]
}

const MetaTagsListComponent = ({tags}: IProps) => {
    return <div>
        <div className={clsx(
            'mt-8'
        )}>
            <H1Heading>
                <span>All Tags</span>
            </H1Heading>
        </div>
        <div className={clsx(
            'mt-8'
        )}>
            <ul>
                <DefaultBlocksLayout>
                    {
                        tags.map(tag => (
                            <li key={tag.slug}><Link href={`/tag/${tag.slug}`} className={clsx('inline-flex items-center gap-1')}>
                                <FaHashtag aria-label='#'/> <span>{tag.name} ({tag.totalPosts})</span>
                            </Link></li>))
                    }
                </DefaultBlocksLayout>
            </ul>
        </div>
    </div>

}

export {
    MetaTagsListComponent
}