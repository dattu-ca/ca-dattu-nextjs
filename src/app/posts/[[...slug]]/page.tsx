import {redirect} from 'next/navigation';
import {RedirectType} from "next/dist/client/components/redirect";
import {blogPostServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import {PostsListComponent} from "~/components/PostsList";


interface IProps {
    params: {
        slug: number;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug: paramSlug} = params;
    const slug = paramSlug ? +paramSlug : 1;

    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+slug - 1) * limit;

    const {items, total} = await blogPostServices.fetchListPaginated(skip, limit);
    if (items.length === 0) {
        redirect('/posts', RedirectType.replace);
        return null;
    }

    return <PostsListComponent posts={items} total={total} current={+slug} limit={limit} skip={skip}/>
}
export default Page;