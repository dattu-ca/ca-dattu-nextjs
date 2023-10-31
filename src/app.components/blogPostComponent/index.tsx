import clsx from "clsx";
import {BlogPost} from "~/models";
import {H1Heading} from "~/app.ui.components/h1Heading";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import {SeriesComponent} from "./seriesComponent";
import {AuthorsComponent} from "./authorsComponent";
import {TagsComponent} from "./tagsComponent";
import {CategoriesComponent} from "./categoriesComponent";
import {DatePublished} from "./datePublished";
import {MetaContainer} from "./metaContainer";
import {SeriesPostsListComponent} from "./seriesPostsListComponent";

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
            <div className={clsx('mb-4')}/>
            <SeriesComponent series={blogPost.series}/>
            <H1Heading>
                <div className={clsx('mb-6')}>
                    {blogPost.heading}
                </div>
            </H1Heading>
            <MetaContainer allFormats={'Default'}>
                <div className="daisyui-divider"></div>
            </MetaContainer>
            <AuthorsComponent authors={blogPost.authors}/>
            <div className={clsx('mb-6')}/>
            <CategoriesComponent categories={blogPost.categories}/>
            <MetaContainer allFormats={'Default'}>
                <div className="daisyui-divider"></div>
            </MetaContainer>

        </div>
        <BlocksBodyContentComponent blocks={blogPost.contentBlocks} isExcerpts={false}/>
        <TagsComponent tags={blogPost.tags}/>
        {
            blogPost.seriesPostsList.length > 0
            && <div className={clsx(
                'mt-8'
            )}>
                <MetaContainer allFormats={'Default'}>
                    <div className="daisyui-divider"></div>
                </MetaContainer>
                <SeriesPostsListComponent series={blogPost.series} 
                                          postsList={blogPost.seriesPostsList}
                                          currentPostSlug={blogPost.slug as string}
                />
                <MetaContainer allFormats={'Default'}>
                    <div className="daisyui-divider"></div>
                </MetaContainer>
            </div>
        }
    </div>
}


export {
    BlogPostComponent
}