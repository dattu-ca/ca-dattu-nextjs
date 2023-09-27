import {BlogPost, MetaCategory, MetaTag} from "~/models";
import {SidebarCategories} from "./sidebarCategories";
import clsx from "clsx";
import {AuthorsShortBioComponent} from "~/components/Author/AuthorsShortBio";
import {SidebarTags} from "~/components/PostSidebar/sidebarTags";

interface IProps {
    post: BlogPost
}

const PostSidebarComponent = ({post}: IProps) => {
    return <div>
        <section className={clsx(
            'mb-4 md:mb-8',
            'last:mb-0 last:md:mb-0',
        )}>
            <SidebarCategories categories={post.categories as MetaCategory[]}/>
        </section>
        <section className={clsx(
            'mb-4 md:mb-8',
            'last:mb-0 last:md:mb-0',
        )}>
            <AuthorsShortBioComponent authors={post.authors} showNameAsALink={true}/>
        </section>
        <section className={clsx(
            'mb-4 md:mb-8',
            'last:mb-0 last:md:mb-0',
        )}>
            <SidebarTags tags={post.tags as MetaTag[]}/>
        </section>
    </div>
}

export {
    PostSidebarComponent
}