import {ReactElement} from "react";
import {blogPostServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";
import clsx from "clsx";


interface IProps {
    children: ReactElement;
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

const Layout = async ({children, params: {slug}}: IProps) => {

    return <div className={clsx(
        'mt-4 md:mt-8',
    )}>
        <div className={clsx(
            'pb-4 md:pb-8',
            'wrapper-with-sidebar',
            'pb-4 md:pb-8',
        )}>
            <div className={clsx(
                'container',
            )}>

                {children}
            </div>
        </div>
    </div>
}
export default Layout;