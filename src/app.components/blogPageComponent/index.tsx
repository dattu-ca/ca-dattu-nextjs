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
        <BlocksBodyContentComponent blocks={blogPage.preHeadingContentBlocks}/>
        <H1Heading>
            <Fragment>
                {blogPage.heading}
            </Fragment>
        </H1Heading>
        <BlocksBodyContentComponent blocks={blogPage.contentBlocks}/>
    </div>
}


export
{
    BlogPageComponent
}