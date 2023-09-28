import clsx from "clsx";
import {HomeComponent} from "~/components/homeComponent";
import {blogHomeServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {SpotlightPosts} from "~/components/postsList/spotlightPosts";
import {PostExcerpt} from "~/components/postsList/postExcerpt";


const Page = async () => {

    const data = await blogHomeServices.fetchBySlug(SERVER_CONFIG.CONTENTFUL_SLUGS.HOME_PAGE);
    return <div>
        <div className={clsx()}>
            <div>
                <HomeComponent data={data}/>
            </div>

        </div>
        <div className={clsx( )}>
            <div className={clsx()}>
                {data.featuredPost && <PostExcerpt post={data.featuredPost}/>}
            </div>
            <div className={clsx()}>
                {data.spotlightPosts && <div className={clsx()}><SpotlightPosts posts={data.spotlightPosts}/></div>}
            </div>
        </div>

    </div>
}

export default Page;
