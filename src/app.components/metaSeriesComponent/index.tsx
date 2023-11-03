import {MetaSeries} from "~/models";
import {BlocksBodyContentComponent} from "~/app.components/blocksBodyContentComponent";
import clsx from "clsx";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {Fragment} from "react";
import Link from "next/link";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface  IProps{
    series: MetaSeries
}
const MetaSeriesComponent = ({series} : IProps) => {
    if(!series){
        return null;
    }
    
    return <div>
        <BlocksBodyContentComponent blocks={series.preHeadingContentBlocks} isExcerpts={false}/>
        <div className={clsx(
            'mt-8'
        )}>
            <H1Heading>
                <Fragment>
                    {series.name}
                </Fragment>
            </H1Heading>
        </div>
        <BlocksBodyContentComponent blocks={series.contentBlocks} isExcerpts={false}/>

        <div className={clsx(
            'mt-8'
        )}>
            <DefaultBlocksLayout>
                <p>All articles in this series are:</p>
                <ul>
                    {
                        series.postsLists.map((post) => (
                            <li key={post.slug}>
                                <Link href={`/post/${post.slug}`}>{post.heading}</Link>
                            </li>
                        ))
                    }
                </ul>
            </DefaultBlocksLayout>
        </div>
    </div>
}

export {
    MetaSeriesComponent
}