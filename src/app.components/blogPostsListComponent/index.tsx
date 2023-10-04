import {Fragment} from "react";
import {BlogPostsList} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";

interface IProps {
    blogPostsList: BlogPostsList;
}

const BlogPostsListComponent = ({
                                    blogPostsList
                                }: IProps) => {
    return <div>
        <BlocksBodyContentComponent blocks={blogPostsList.preHeadingContentBlocks} 
                                    isExcerpts={false}/>
        <H1Heading>
            <Fragment>
                {blogPostsList.heading}
            </Fragment>
        </H1Heading>
        <BlocksBodyContentComponent blocks={blogPostsList.contentBlocks}
                                    isExcerpts={false}/>
    </div>
}

export {
    BlogPostsListComponent
}