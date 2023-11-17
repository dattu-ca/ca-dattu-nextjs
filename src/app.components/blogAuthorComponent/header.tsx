import clsx from "clsx";
import {BlogAuthor} from "~/models";
import {BlogAuthorTabsComponent} from "./tabsComponent";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    author: BlogAuthor
}

const BlogAuthorHeader = ({author}: IProps) => {
    return <div className={clsx('mt-8')}>
        <DefaultBlocksLayout allFormats={'Default'}>
            <div className={clsx('mb-6')}>
                <div className={clsx('flex items-center  gap-4')}>
                    <div className={clsx('daisyui-avatar daisyui-placeholder')}>
                        {
                            author.avatar?.desktopImage?.url ?
                                <div className={clsx('w-24 rounded-full')}>
                                    <img alt={author.avatar.desktopImage.alt}
                                         src={author.avatar.desktopImage.url}/>
                                </div> :
                                <div className={clsx('bg-neutral-focus text-neutral-content rounded-full w-24')}>
                                    <span className={clsx('text-3xl')}>{author.avatarInitials}</span>
                                </div>
                        }
                    </div>
                    <div>
                        <h1>{author.displayName}</h1>
                    </div>
                </div>
            </div>
        </DefaultBlocksLayout>
        <DefaultBlocksLayout allFormats={'Default'}>
            <div className={clsx('mb-12')}>Total Articles: {author.totalPosts}</div>
        </DefaultBlocksLayout>
        <BlogAuthorTabsComponent author={author}/>
        <div className={clsx('mb-12')}/>
    </div>
}

export {
    BlogAuthorHeader
};