import {BodyPostsListComponent} from "~/app.components/bodyPostsListComponent";
import {BlogPost, BodyPostsList, PaginationConfig} from "~/models";
import {MetaContainer} from "./metaContainer";

interface IProps {
    slug: string,
    paginationData: PaginationConfig;
    posts: BlogPost[];
}

const BlogAuthorPostsListComponent = ({slug, posts, paginationData}: IProps) => {
    const data: BodyPostsList = {
        sysId: slug,
        contentType: 'BodyPostsList',
        cmsSource: 'Sanity',
        name: 'author',
        postsListIdentifier: "Author",
        limitPerPage: paginationData.limit,
        isPaginated: true,
        layout: "Excerpt",
        posts,
        paginationData
    }
    return <MetaContainer>
        <BodyPostsListComponent data={data}/>
    </MetaContainer>
}

export {
    BlogAuthorPostsListComponent
}