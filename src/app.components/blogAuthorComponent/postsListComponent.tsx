import {BodyPostsListComponent} from "~/app.components/bodyPostsListComponent";
import {BlogAuthor, BlogPost, BodyPostsList, PaginationConfig} from "~/models";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    postsListData: BodyPostsList | undefined
}

const BlogAuthorPostsListComponent = ({postsListData}: IProps) => {
    if (!postsListData || !postsListData.posts || postsListData.posts.length === 0) {
        return null
    }
    return <DefaultBlocksLayout>
        <BodyPostsListComponent data={postsListData}/>
    </DefaultBlocksLayout>
}

export {
    BlogAuthorPostsListComponent
}