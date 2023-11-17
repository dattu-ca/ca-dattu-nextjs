import clsx from "clsx";
import {Fragment} from "react";
import {MetaSeries} from "~/models";
import {AuthorsComponent} from "./authorsComponent";
import {BodyPostsListComponent} from "../bodyPostsListComponent";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import {DividerComponent} from "~/app.ui.components/dividerComponent";

interface IProps {
    series: MetaSeries
}

const MetaSeriesComponent = ({series}: IProps) => {
    if (!series) {
        return null;
    }

    return <>
        <BlocksBodyContentComponent blocks={series.preHeadingContentBlocks} isExcerpts={false}/>
        <H1Heading className={clsx(
            'mt-8'
        )}>
            <>{series.displayName}</>
        </H1Heading>
        <DividerComponent className={clsx(
            'mt-8'
        )}>
            <h5>Authors of this series</h5>
            <AuthorsComponent authors={series.authorsList}/>
        </DividerComponent>
        <div className={clsx(
            {
                ['mt-8']: (series.contentBlocks || []).length > 0
            }
        )}>
            <BlocksBodyContentComponent blocks={series.contentBlocks} isExcerpts={false}/>
        </div>

        {
            series.postsListData && (
                <div className={clsx(
                    'mt-8'
                )}>
                    <DefaultBlocksLayout>
                        <p>All articles in this series are:</p>
                        <BodyPostsListComponent data={series.postsListData}/>
                    </DefaultBlocksLayout>
                </div>
            )
        }

    </>
}

export {
    MetaSeriesComponent
}