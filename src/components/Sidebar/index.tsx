import {IBodySidebar} from "~/models";
import clsx from "clsx";
import {CustomRichTexRenderer} from '../CustomRichTextRenderer';
import Link from "next/link";
import {useCallback} from "react";
import {usePathname} from "next/navigation";

interface IProps {
    sidebar: IBodySidebar
}

const SidebarComponent = ({sidebar}: IProps) => {
    const {heading, description, navigation} = sidebar;

    const path = usePathname();
    const isCurrentPage = useCallback((url: string, exact: boolean = false) => {
        if (!url) {
            return false;
        }
        if (url === '/') {
            return path === url;
        }
        if (exact) {
            return path === url;
        }
        return path.includes(url)
    }, [path]);
    return <div className={clsx(
        'bg-white',
    )}>
        <div className={clsx(
            'p-4 pb-0'
        )}>
            <h6>{heading}</h6>
            <CustomRichTexRenderer document={description}/>
        </div>
        <div className={clsx(
            'p-4'
        )}>
            <ul className={clsx(
                'list-none m-0 p-0',
                'border-solid border-[1px] border-b-0 border-site-primary'
            )}>
                {navigation?.links?.map((link) => (
                    <li key={link.id}
                        className={clsx(
                            'p-0 m-0',
                            'border-b-[1px] border-[inherit]',
                            {
                                ['shadow-sm ']: isCurrentPage(link.url, true)
                            }
                        )}>
                        <Link className={clsx(
                            'w-full block',
                            'px-4 py-2',
                            'relative',
                            'transition-all duration-500',
                            //'before:transition-none after:transition-none ',
                            {
                                ['bg-white hover:bg-site-primary hover:text-white']: !isCurrentPage(link.url, true),
                                [
                                    'bg-site-primary text-white hover:bg-site-primary hover:text-white ' + 
                                    'hover:after:w-0 ' 
                                    // 'scale-110 '
                                    // 'before:content-[""] before:bg-gradient-to-r before:from-site-primary before:to-site-primary-dark ' +
                                    // 'before:absolute before:right-0 before:top-0 before:w-[10px] before:h-full before:z-20 ' +
                                    // 'before:skew-y-[-210deg] before:translate-x-[calc(100%+16px)] before:translate-y-[15px] ' +
                                    // 'before:shadow-2xl ' +
                                    // 'after:content-[""] after:bg-gradient-to-r after:from-site-primary after:to-site-primary-dark ' +
                                    // '"after:absolute after:right-0 after:top-0 after:left-auto after:bottom-auto after:w-[25px] hover:after:w-[25px] after:h-[calc(100%+1px)] after:z-30 ' +
                                    // 'after:skew-y-[20deg] after:translate-x-[calc(100%+1px)] after:translate-y-[4px] ' +
                                    // 'after:shadow-2xl '
                                ]: isCurrentPage(link.url, true)
                            }
                        )}
                              href={link.url}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

export {
    SidebarComponent
}