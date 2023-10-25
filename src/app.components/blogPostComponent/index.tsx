import {Fragment} from "react";
import clsx from "clsx";
import {BlogPost} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import {SeriesComponent} from "./seriesComponent";
import {AuthorsComponent} from "./authorsComponent";
import {TagsComponent} from "./tagsComponent";
import {CategoriesComponent} from "./categoriesComponent";
import {DatePublished} from "./datePublished";

interface IProps {
    blogPost: BlogPost;
}


const BlogPostComponent = ({blogPost}: IProps) => {
    return <div>
        <BlocksBodyContentComponent blocks={blogPost.preHeadingContentBlocks} isExcerpts={false}/>
        <div className={clsx(
            'mt-8'
        )}>
            <DatePublished date={blogPost.datePublished}/>
            <SeriesComponent series={blogPost.series}/>
            <H1Heading>
                <Fragment>
                    {blogPost.heading}
                </Fragment>
            </H1Heading>
            <AuthorsComponent authors={blogPost.authors}/>
            <CategoriesComponent categories={blogPost.categories}/>
            <TagsComponent tags={blogPost.tags}/>
        </div>
        <BlocksBodyContentComponent blocks={blogPost.contentBlocks} isExcerpts={false}/>
    </div>
}


export {
    BlogPostComponent
}