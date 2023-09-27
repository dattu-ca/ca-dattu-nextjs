import clsx from "clsx";
import {BlogPost, MetaCategory, MetaTag} from "~/models";
import {AuthorsShortBioComponent} from "~/components/Author/AuthorsShortBio";
import {SidebarCategories} from "./sidebarCategories";
import {SidebarTags} from "./sidebarTags";
import {SidebarSeries} from "./sidebarSeries";

interface IProps {
    post: BlogPost;
    seriesPosts?: BlogPost[] | undefined;
}

const PostSidebarComponent = ({post, seriesPosts}: IProps) => {
    return <div>
        {
            post.categories
            && (
                <section className={clsx(
                    'mb-4 md:mb-8',
                    'last:mb-0 last:md:mb-0',
                )}>
                    <SidebarCategories categories={post.categories as MetaCategory[]}/>
                </section>
            )
        }
        {
            post.authors
            && (
                <section className={clsx(
                    'mb-4 md:mb-8',
                    'last:mb-0 last:md:mb-0',
                )}>
                    <AuthorsShortBioComponent authors={post.authors} showNameAsALink={true}/>
                </section>
            )
        }
        {
            post.tags
            && (
                <section className={clsx(
                    'mb-4 md:mb-8',
                    'last:mb-0 last:md:mb-0',
                )}>
                    <SidebarTags tags={post.tags as MetaTag[]}/>
                </section>
            )
        }
        {
            seriesPosts
            && (
                <section className={clsx(
                    'mb-4 md:mb-8',
                    'last:mb-0 last:md:mb-0',
                )}>
                    <SidebarSeries posts={seriesPosts}/>
                </section>
            )
        }
    </div>
}

export {
    PostSidebarComponent
}