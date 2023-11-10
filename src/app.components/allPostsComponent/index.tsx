import {Fragment} from "react";
import {AllPosts, PaginationConfig} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import clsx from "clsx";
import {AllPostsListComponent} from "~/app.components/allPostsComponent/postsListComponent";

interface IProps {
    allPosts?: AllPosts | undefined;
}


const AllPostsComponent = ({allPosts}: IProps) => {
    if (!allPosts) {
        return null;
    }

    return <div>
        <BlocksBodyContentComponent blocks={allPosts.preHeadingContentBlocks} isExcerpts={false}/>
        <H1Heading
            className={clsx(
                'mt-8'
            )}>
            <Fragment>
                {allPosts.heading}
            </Fragment>
        </H1Heading>
        <BlocksBodyContentComponent blocks={allPosts.contentBlocks} isExcerpts={false}/>
        <AllPostsListComponent
            postsListData={allPosts.postsListData}
            className={clsx(
                'mt-8'
            )}/>
    </div>
}


export {
    AllPostsComponent
}