import {getBlogPosts} from "~/services";
import {PaginationComponent} from "~/components/Pagination";
import {SITE_CONSTANTS} from "~/utils/constants";

const Page = async () => {
    const slug = 1;
    const limit = SITE_CONSTANTS.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+slug - 1) * limit;

    // const {items, total} = await getBlogPosts(skip, limit);
    
    return <div>
        <h1>HOME PAGE NO DATA LOADING</h1>
        {/*<PaginationComponent skip={skip}*/}
        {/*                     limit={limit}*/}
        {/*                     total={total}*/}
        {/*                     current={+slug}*/}
        {/*                     linkPrefix='/posts'/>*/}
        {/*<pre>{JSON.stringify(items, null, 2)}</pre>*/}
    </div>
}

export default Page;
