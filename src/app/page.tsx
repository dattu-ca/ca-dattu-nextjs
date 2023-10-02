import clsx from "clsx";
import {blogHomeServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";


const Page = async () => {

    const data = await blogHomeServices.fetchBySlug(SERVER_CONFIG.CONTENTFUL_SLUGS.HOME_PAGE);
    return <div>
        <div className={clsx()}>
            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    </div>
}

export default Page;
