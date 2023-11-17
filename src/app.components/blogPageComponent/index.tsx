import {Fragment} from "react";
// import clsx from "clsx";
import {BlogPage} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import clsx from "clsx";

interface IProps {
    blogPage: BlogPage;
}


const BlogPageComponent = ({blogPage}: IProps) => {
    return <div>
        <BlocksBodyContentComponent blocks={blogPage.preHeadingContentBlocks} isExcerpts={false}/>
        <div className={clsx(
            'mt-8'
        )}>
            <H1Heading>
                <Fragment>
                    {blogPage.displayHeading}
                </Fragment>
            </H1Heading>
        </div>
        <BlocksBodyContentComponent blocks={blogPage.contentBlocks} isExcerpts={false}/>
    </div>
}


export
{
    BlogPageComponent
}