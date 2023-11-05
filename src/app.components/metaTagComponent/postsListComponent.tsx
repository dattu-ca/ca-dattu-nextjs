import {BodyPostsListComponent} from "~/app.components/bodyPostsListComponent";
import {BlogPost, BodyPostsList, PaginationConfig} from "~/models";
import { DefaultBlocksLayout } from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    paginationData: PaginationConfig;
    posts: BlogPost[];
}

const TagPostsListComponent = ({posts, paginationData}: IProps) => {
    const data: BodyPostsList = {
        sysId: 'tags',
        contentType: 'BodyPostsList',
        cmsSource: 'Sanity',
        name: 'Tags',
        postsListIdentifier: "All",
        limitPerPage: paginationData.limit,
        isPaginated: true,
        layout: "Excerpt",
        posts,
        paginationData
    }
    return <DefaultBlocksLayout>
        <BodyPostsListComponent data={data}/>
    </DefaultBlocksLayout>
}

export {
    TagPostsListComponent
}