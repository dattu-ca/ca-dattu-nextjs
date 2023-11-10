import {Fragment} from "react";
import clsx from "clsx";
import {BodyPostsList, PaginationConfig} from "~/models";
import {ArticleComponent} from "~/app.components/bodyPostsListComponent/article";
import {PaginationComponent} from "~/app.ui.components/paginationComponent";


interface IProps {
    data: BodyPostsList
}

const BodyPostsListExcerptsComponent = ({data}: IProps) => {
    return (
        <div>
            {
                (data.posts || []).filter(post => Boolean(post)).map(post => {
                    return <div key={post.sysId}>
                        <div className={clsx(
                            'md:pl-6',
                            'md:border-l md:border-zinc-100 md:dark:border-zinc-700/40',
                            'mb-10 md:mb-16'
                        )}>
                            <div className={clsx(
                                'flex flex-col space-y-16'
                            )}>
                                <ArticleComponent post={post}/>
                            </div>
                        </div>
                    </div>
                })
            }
            {
                data && data.isPaginated && data.paginationData && data.paginationData.totalPages > 1
                && <PaginationComponent paginationData={data.paginationData}/>
            }
        </div>
    );
}

export {
    BodyPostsListExcerptsComponent
}