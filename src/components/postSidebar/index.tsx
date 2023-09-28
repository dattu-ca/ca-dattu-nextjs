import clsx from "clsx";
import {BlogPost, MetaCategory, MetaTag} from "~/models";
import {AuthorsShortBioComponent} from "../author/authorsShortBio";
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
                <section className={clsx()}>
                    <SidebarCategories categories={post.categories as MetaCategory[]}/>
                </section>
            )
        }
        {
            post.authors
            && (
                <section className={clsx()}>
                    <AuthorsShortBioComponent authors={post.authors} showNameAsALink={true}/>
                </section>
            )
        }
        {
            post.tags
            && (
                <section className={clsx()}>
                    <SidebarTags tags={post.tags as MetaTag[]}/>
                </section>
            )
        }
        {
            seriesPosts
            && (
                <section className={clsx()}>
                    <SidebarSeries posts={seriesPosts}/>
                </section>
            )
        }
    </div>
}

export {
    PostSidebarComponent
}