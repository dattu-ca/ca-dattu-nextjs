import {BlogAuthor} from "~/models";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";

interface IProps {
    author: BlogAuthor
}

const BlogAuthorContent = ({author}: IProps) => {
    return <BlocksBodyContentComponent blocks={author.contentBlocks} isExcerpts={false}/>
}

export {
    BlogAuthorContent
};