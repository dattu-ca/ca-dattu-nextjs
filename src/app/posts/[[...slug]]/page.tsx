import {redirect} from 'next/navigation';
import {RedirectType} from "next/dist/client/components/redirect";
import {getBlogPosts} from "~/services";
import {PaginationComponent} from "~/components/Pagination";
import {CONTENT_CONFIG} from "~/utils/constants.server";


interface IProps {
    params: {
        slug: number;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug: paramSlug} = params;
    const slug = paramSlug ? +paramSlug : 1;

    const limit = CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+slug - 1) * limit;

    const {items, total} = await getBlogPosts(skip, limit);
    if (items.length === 0) {
        redirect('/posts', RedirectType.replace);
        return null;
    }

    return <div>
        <h1>POSTS LIST PAGE NUMBER: {slug}</h1>
        <PaginationComponent skip={skip}
                             limit={limit}
                             total={total}
                             current={+slug}
                             linkPrefix='/posts'/>


        <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
}
export default Page;