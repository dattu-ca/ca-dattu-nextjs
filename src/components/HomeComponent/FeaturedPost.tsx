import {BlogPost} from "~/models";
import {PostExcerpt} from "~/components/PostsList/postExcerpt";

interface IProps {
    post: BlogPost
}

const FeaturedPost = ({post}: IProps) => {
    return <PostExcerpt post={post}/>
}

export {
    FeaturedPost
}