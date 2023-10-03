import {BlogPost, BlogPostsList, PaginationConfig} from "~/models";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";

interface IProps {
    blogPostsList: BlogPostsList;
    posts: BlogPost[];
    paginationData: PaginationConfig;
}

const BlogPostsListComponent = ({
                                    blogPostsList
                                }: IProps) => {
    return <div>
        <BlocksBodyContentComponent blocks={blogPostsList.preHeadingContentBlocks}/>
        <BlocksBodyContentComponent blocks={blogPostsList.contentBlocks}/>
    </div>
}

export {
    BlogPostsListComponent
}