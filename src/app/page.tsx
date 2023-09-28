import clsx from "clsx";
import {HomeComponent} from "~/components/HomeComponent";
import {blogHomeServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {FeaturedPost} from "~/components/HomeComponent/FeaturedPost";
import {SpotlightPosts} from "~/components/HomeComponent/SpotlightPosts";


const Page = async () => {

    const data = await blogHomeServices.fetchBySlug(SERVER_CONFIG.CONTENTFUL_SLUGS.HOME_PAGE);
    return <div>
        <div className={clsx(
            'mt-4 md:mt-8',
            'wrapper-full-width',
        )}>
            <section>
                <HomeComponent data={data}/>
            </section>

        </div>
        <div className={clsx(
            'mt-4 md:mt-8',
            'wrapper-with-sidebar',
            'pb-4 md:pb-8',
        )}>
            <section className={clsx('container')}>
                {data.featuredPost && <FeaturedPost post={data.featuredPost}/>}
            </section>
            <section className={clsx('sidebar')}>
                {data.spotlightPosts && <SpotlightPosts posts={data.spotlightPosts}/>}
            </section>
        </div>

    </div>
}

export default Page;
