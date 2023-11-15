import {SiteFooter} from "~/models";
import clsx from "clsx";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import Link from "next/link";

interface IProps {
    footer?: SiteFooter | undefined
}

const FooterComponent = ({footer}: IProps) => {
    return <DefaultBlocksLayout allFormats='Full Width'>
        <div className={
            clsx(
                'pt-6 pb-6',
                'w-full',
                'bg-gray-100 dark:bg-slate-900',
                'shadow-inner'
            )}>
            <DefaultBlocksLayout allFormats='Container Width'>
                <div className={clsx('px-4')}>
                    <div className={clsx(
                        'flex justify-between items-start',
                        'gap-8 md:gap-2',
                        'flex-col md:flex-row'
                    )}>
                        <div>
                            <ul className={clsx(
                                'p-0',
                                'list-none',
                                'space-y-0',
                                'md:flex md:gap-4',
                                
                            )}>
                                {
                                    footer?.links && footer?.links?.links && footer.links.links.map(link => (
                                        <li key={link.label}>
                                            <Link href={link.url} target={link.target}>{link.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <p>{footer?.copyright}</p>
                        </div>
                    </div>
                </div>
            </DefaultBlocksLayout>
        </div>
    </DefaultBlocksLayout>
}

export {
    FooterComponent
}