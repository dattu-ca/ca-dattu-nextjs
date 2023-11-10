import clsx from "clsx";
import {BlogPost} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import {SeriesComponent} from "./seriesComponent";
import {AuthorsComponent} from "./authorsComponent";
import {TagsComponent} from "./tagsComponent";
import {CategoriesComponent} from "./categoriesComponent";
import {DatePublished} from "./datePublished";
import {SeriesPostsListComponent} from "./seriesPostsListComponent";
import {DividerComponent} from "~/app.ui.components/dividerComponent";

interface IProps {
    blogPost: BlogPost;
}

const BlogPostComponent = ({blogPost}: IProps) => {
    return <div>
        <BlocksBodyContentComponent blocks={blogPost.preHeadingContentBlocks} isExcerpts={false}/>
        <DatePublished date={blogPost.datePublished}
                       className={clsx('mt-8')}/>
        <SeriesComponent series={blogPost.series}
                         className={clsx('mt-8')}/>
        <H1Heading className={clsx('mt-0')}>{blogPost.heading}</H1Heading>
        {
            ((blogPost.authors || []).length > 0 || (blogPost.categories || []).length > 0)
            && <>
                <DividerComponent>
                    <AuthorsComponent authors={blogPost.authors}/>
                    <div className={clsx('mb-6')}/>
                    <CategoriesComponent categories={blogPost.categories}/>
                </DividerComponent>
            </>
        }
        <BlocksBodyContentComponent blocks={blogPost.contentBlocks} isExcerpts={false}/>
        <TagsComponent tags={blogPost.tags}/>
        {
            blogPost.series?.postsListData && (blogPost.series.postsListData.posts || []).length > 0 && (
                <DividerComponent className={clsx(
                    'mt-8'
                )}>
                    <SeriesPostsListComponent series={blogPost.series}
                                              currentPostSlug={blogPost.slug as string}
                    />
                </DividerComponent>
            )
        }
    </div>
}


export {
    BlogPostComponent
}