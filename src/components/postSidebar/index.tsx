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
                <div className={clsx()}>
                    <SidebarCategories categories={post.categories as MetaCategory[]}/>
                </div>
            )
        }
        {
            post.authors
            && (
                <div className={clsx()}>
                    <AuthorsShortBioComponent authors={post.authors} showNameAsALink={true}/>
                </div>
            )
        }
        {
            post.tags
            && (
                <div className={clsx()}>
                    <SidebarTags tags={post.tags as MetaTag[]}/>
                </div>
            )
        }
        {
            seriesPosts
            && (
                <div className={clsx()}>
                    <SidebarSeries posts={seriesPosts}/>
                </div>
            )
        }
    </div>
}

export {
    PostSidebarComponent
}