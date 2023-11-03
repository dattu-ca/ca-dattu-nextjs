import {BlogAuthor} from "~/models";
import clsx from "clsx";
import Link from "next/link";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

interface IProps {
    authors?: BlogAuthor[] | undefined;
}

const AuthorsComponent = ({authors}: IProps) => {
    return authors && Array.isArray(authors) && authors.length > 0 && <DefaultBlocksLayout>
        <ul className={clsx(
            'space-y-0',
            'list-none',
            'flex gap-4 items-center justify-start',
        )}>{
            authors.map(author => (
                <li key={author.slug}>

                    <div className={clsx(
                        'flex gap-2  items-center justify-start'
                    )}>
                        <div className={clsx('daisyui-avatar daisyui-placeholder')}>
                            {
                                author.avatar?.desktopImage?.url ?
                                    <div className={clsx('w-8 rounded-full')}>
                                        <img alt={author.avatar.desktopImage.alt}
                                             src={author.avatar.desktopImage.url}/>
                                    </div> :
                                    <div className={clsx('bg-neutral-focus text-neutral-content rounded-full w-8')}>
                                        <span className={clsx('text-xs')}>{author.avatarInitials}</span>
                                    </div>
                            }
                        </div>
                        <Link href={`/author/${author.slug}`}>
                            <span>{author.name}</span>
                        </Link>
                    </div>

                </li>
            ))
        }</ul>
    </DefaultBlocksLayout>

}

export {
    AuthorsComponent
}