import {BlogPost} from "~/models";
import clsx from "clsx";
import {CustomRichTexRenderer} from '../CustomRichTextRenderer'
import Link from "next/link";

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
                      className={clsx(
                          'block',
                          'hover:bg-gray-100',
                          'hover:after:w-0',
                          'border-b-2'
                      )}
                >
                    <div className={clsx(
                        'p-4 md:p-8'
                    )}>
                        <h6 className={clsx(
                            {
                                ['mb-0'] : !post.shortBody
                            }
                        )}>{post.heading}</h6>
                        <div className={clsx('text-black')}>
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