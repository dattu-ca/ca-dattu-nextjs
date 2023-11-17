import {Fragment} from "react";
import clsx from "clsx";
import {AllPosts} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import {PostsListComponent} from "../bodyPostsListComponent/postsListComponent";

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
                {allPosts.displayHeading}
            </Fragment>
        </H1Heading>
        <BlocksBodyContentComponent blocks={allPosts.contentBlocks} isExcerpts={false}/>
        <PostsListComponent
            postsListData={allPosts.postsListData}
            className={clsx(
                'mt-8'
            )}/>
    </div>
}


export {
    AllPostsComponent
}