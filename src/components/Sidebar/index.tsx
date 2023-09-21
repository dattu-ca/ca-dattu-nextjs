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
            <h5>{heading}</h5>
            <CustomRichTexRenderer document={description}/>
        </div>
        <div className={clsx(
            'p-4'
        )}>
            <ul className={clsx(
                'list-none m-0 p-0',
            )}>
                {navigation?.links?.map((link) => (
                    <li key={link.id}
                        className={clsx(
                            'w-full block',
                            'px-4 py-2',
                            'border-b-[1px] border-[inherit]',
                        )}>
                        <Link className={clsx()}
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