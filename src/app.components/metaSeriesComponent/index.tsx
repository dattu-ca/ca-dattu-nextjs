import {MetaSeries} from "~/models";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import clsx from "clsx";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {Fragment} from "react";
import Link from "next/link";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import {AuthorsComponent} from "./authorsComponent";

interface IProps {
    series: MetaSeries
}

const MetaSeriesComponent = ({series}: IProps) => {
    if (!series) {
        return null;
    }

    return <div>
        <BlocksBodyContentComponent blocks={series.preHeadingContentBlocks} isExcerpts={false}/>
        <H1Heading className={clsx(
            'mt-8'
        )}>
            <Fragment>
                {series.name}
            </Fragment>
        </H1Heading>
        <div className={clsx(
            'mt-8'
        )}>
            <DefaultBlocksLayout allFormats={'Default'}>
                <div className="daisyui-divider"></div>
                <h5>Authors of this series</h5>
            </DefaultBlocksLayout>
            <AuthorsComponent authors={series.authorsList}/>
            <DefaultBlocksLayout allFormats={'Default'}>
                <div className="daisyui-divider"></div>
            </DefaultBlocksLayout>
        </div>
        <div className={clsx(
            {
                ['mt-8']: (series.contentBlocks || []).length > 0
            }
        )}>
            <BlocksBodyContentComponent blocks={series.contentBlocks} isExcerpts={false}/>
        </div>

        <div className={clsx(
            'mt-8'
        )}>
            <DefaultBlocksLayout>
                <p>All articles in this series are:</p>
                <ol>
                    {
                        (series.postsListData?.posts || []).map((post) => (
                            <li key={post.slug}>
                                <Link href={`/post/${post.slug}`}>{post.heading}</Link>
                            </li>
                        ))
                    }
                </ol>
            </DefaultBlocksLayout>
        </div>
    </div>
}

export {
    MetaSeriesComponent
}