import {Fragment} from "react";
import {AllPosts, PaginationConfig} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import clsx from "clsx";
import {AllPostsListComponent} from "~/app.components/allPostsComponent/postsListComponent";

interface IProps {
    allPosts?: AllPosts | undefined;
    paginationConfig: PaginationConfig,
}


const AllPostsComponent = ({allPosts, paginationConfig}: IProps) => {
    if (!allPosts) {
        return null;
    }

    return <div>
        <BlocksBodyContentComponent blocks={allPosts.preHeadingContentBlocks} isExcerpts={false}/>
        <div className={clsx(
            'mt-8'
        )}>
            <H1Heading>
                <Fragment>
                    {allPosts.heading}
                </Fragment>
            </H1Heading>
        </div>
        <BlocksBodyContentComponent blocks={allPosts.contentBlocks} isExcerpts={false}/>
        {
            allPosts.postsLists && allPosts.postsLists.length > 0 && <div className={clsx(
                'mt-8'
            )}>
                <AllPostsListComponent paginationData={paginationConfig} posts={allPosts.postsLists}/>
            </div>
        }


    </div>
}


export {
    AllPostsComponent
}