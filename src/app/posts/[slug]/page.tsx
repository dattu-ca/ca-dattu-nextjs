import { redirect } from 'next/navigation'
import {getBlogPosts} from "~/services";
import {PaginationComponent} from "~/components/Pagination";
import {SITE_CONSTANTS} from "~/utils/constants";


interface IProps {
    params: {
        slug: number;
    }
}

const Page = async (props: IProps) => {
    const {params} = props;
    const {slug} = params;
    if(+slug === 1){
        redirect('/');
        return null;
    }
    
    const limit = SITE_CONSTANTS.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+slug - 1) * limit;

    const {items, total} = await getBlogPosts(skip, limit);
    if(items.length === 0){
        redirect('/');
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