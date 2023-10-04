import {Fragment} from "react";
// import clsx from "clsx";
import {BlogPost} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";

interface IProps {
    blogPost: BlogPost;
}


const BlogPostComponent = ({blogPost}: IProps) => {
    return <div>
        <BlocksBodyContentComponent blocks={blogPost.preHeadingContentBlocks} isExcerpts={false}/>
        <H1Heading>
            <Fragment>
                {blogPost.heading}
            </Fragment>
        </H1Heading>
        <BlocksBodyContentComponent blocks={blogPost.contentBlocks} isExcerpts={false}/>
    </div>
}


export {
    BlogPostComponent
}