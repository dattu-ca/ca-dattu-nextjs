import {BodyPostsListComponent} from "~/app.components/bodyPostsListComponent";
import {BodyPostsList} from "~/models";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    className?: string | undefined;
    postsListData?: BodyPostsList | undefined
}

const PostsListComponent = ({className, postsListData}: IProps) => {
    if (!postsListData || !postsListData.posts || postsListData.posts.length === 0) {
        return null
    }
    return <div className={className}>
        <DefaultBlocksLayout>
            <BodyPostsListComponent data={postsListData}/>
        </DefaultBlocksLayout>
    </div>
}

export {
    PostsListComponent
}