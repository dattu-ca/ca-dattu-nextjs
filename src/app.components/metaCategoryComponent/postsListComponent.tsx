import {BodyPostsListComponent} from "~/app.components/bodyPostsListComponent";
import {BlogPost, BodyPostsList, PaginationConfig} from "~/models";
import { DefaultBlocksLayout } from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    className?: string | undefined;
    postsListData?: BodyPostsList | undefined
}

const CategoryPostsListComponent = ({className, postsListData}: IProps) => {
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
    CategoryPostsListComponent
}