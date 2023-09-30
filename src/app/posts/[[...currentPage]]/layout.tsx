import {ReactElement} from "react";
import {blogPostServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import clsx from "clsx";


interface IProps {
    children: ReactElement | ReactElement[];
    params: {
        currentPage: number;
    }
}

export const generateMetadata = async (props: IProps) => {
    const {params} = props;
    const {currentPage: paramCurrentPage} = params;
    const currentPage = paramCurrentPage ? +paramCurrentPage : 1;

    const limit = SERVER_CONFIG.CONTENT_CONFIG.DEFAULT_MAX_POSTS_PER_PAGE;
    const skip = (+currentPage - 1) * limit;
    const {total} = await blogPostServices.fetchListPaginated(skip, limit);

    const totalPages = Math.ceil(total / limit)

    return {
        title: `Page ${currentPage} of ${totalPages}`
    }
}

const Layout = async ({children}: IProps) => {

    return <div className={clsx()}>
        <div className={clsx()}>
            <div className={clsx()}>
                {children}
            </div>
        </div>
    </div>
}
export default Layout;