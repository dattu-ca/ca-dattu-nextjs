import {Fragment} from "react";
// import clsx from "clsx";
import {BlogPage} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";

interface IProps {
    blogPage: BlogPage;
}


const BlogPageComponent = ({blogPage}: IProps) => {
    return <div>
        <BlocksBodyContentComponent blocks={blogPage.preHeadingContentBlocks} isExcerpts={false}/>
        <H1Heading>
            <Fragment>
                {blogPage.heading}
            </Fragment>
        </H1Heading>
        <BlocksBodyContentComponent blocks={blogPage.contentBlocks} isExcerpts={false}/>
    </div>
}


export
{
    BlogPageComponent
}