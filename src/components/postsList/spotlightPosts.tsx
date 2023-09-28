import Link from "next/link";
import clsx from "clsx";
import {BlogPost} from "~/models";
import {CustomRichTexRenderer} from '../customRichTextRenderer';

interface IProps {
    posts: BlogPost[]
}

const SpotlightPosts = ({posts}: IProps) => {

    return <div className={clsx(
        
    )}>
        {
            posts.map(post => (
                <Link key={post.slug} 
                      href={`/post/${post.slug}`}
                      className={clsx()}>
                    <div className={clsx()}>
                        <h6 className={clsx()}>{post.heading}</h6>
                        <div className={clsx()}>
                            <CustomRichTexRenderer document={post.shortBody}/>
                        </div>
                    </div>
                </Link>
            ))
        }

    </div>
}

export {
    SpotlightPosts
}