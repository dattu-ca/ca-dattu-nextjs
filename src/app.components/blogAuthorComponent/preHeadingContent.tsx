import {BlogAuthor} from "~/models";
import {BlocksBodyContentComponent} from "../blocksBodyContentComponent";
import clsx from "clsx";

interface IProps {
    author: BlogAuthor
}

const BlogAuthorPreHeadingContent = ({author}: IProps) => {
    return <div className={clsx()}>
        <BlocksBodyContentComponent blocks={author.preHeadingContentBlocks} isExcerpts={false}/>
    </div>
}

export {
    BlogAuthorPreHeadingContent
};