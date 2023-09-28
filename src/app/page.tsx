import clsx from "clsx";
import {HomeComponent} from "~/components/HomeComponent";
import {blogHomeServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {SpotlightPosts} from "~/components/PostsList/SpotlightPosts";
import {PostExcerpt} from "~/components/PostsList/postExcerpt";


const Page = async () => {

    const data = await blogHomeServices.fetchBySlug(SERVER_CONFIG.CONTENTFUL_SLUGS.HOME_PAGE);
    return <div>
        <div className={clsx()}>
            <section>
                <HomeComponent data={data}/>
            </section>

        </div>
        <div className={clsx( )}>
            <section className={clsx()}>
                {data.featuredPost && <PostExcerpt post={data.featuredPost}/>}
            </section>
            <section className={clsx()}>
                {data.spotlightPosts && <div className={clsx()}><SpotlightPosts posts={data.spotlightPosts}/></div>}
            </section>
        </div>

    </div>
}

export default Page;
