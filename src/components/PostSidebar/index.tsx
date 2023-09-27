import {BlogPost, MetaCategory} from "~/models";
import {SidebarCategories} from "./sidebarCategories";
import clsx from "clsx";
import {AuthorsShortBioComponent} from "~/components/Author/AuthorsShortBio";

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
    </div>
}

export {
    PostSidebarComponent
}