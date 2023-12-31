import clsx from "clsx";
import Link from "next/link";
import { ILink } from "~/models";
import { useNavbarContext } from "../context";


interface IProps {
    id: string;
    links: ILink[]
}

const MenuMobileSubmenu = ({ id, links }: IProps) => {
    const {
        ctxData: { mobileSubMenuOpenIds },
        ctxFunctions: { isCurrentPage, getAriaCurrent, closeMobileMenu }
    } = useNavbarContext();
    const isOpen = mobileSubMenuOpenIds.includes(id)

    return <div className={clsx(
        'transition duration-1000 h-full',
        {
            ['max-h-full']: isOpen,
            ['max-h-0 overflow-hidden']: !isOpen
        }
    )}>
        <ul className={clsx(
            'pl-8',
            'space-y-none',
            'list-none',
        )}>
            {
                links.map(link => (
                    <li key={link.label}
                        className={clsx(
                            'border-b-[1px] last-of-type:border-b-0',
                            'border-zinc-900/5',
                            'dark:border-white/10'
                        )}>
                        <Link href={link.url}
                            target={link.target}
                            tabIndex={isOpen ? undefined : -1}
                            aria-current={getAriaCurrent(link.url)}
                            onClick={() => closeMobileMenu()}
                            className={clsx(
                                'relative block px-3 py-2 transition',
                                'hover:after:w-0',
                                'hover:text-teal-500 dark:hover:text-teal-400',
                                {
                                    ['text-zinc-800 dark:text-zinc-100']: !isCurrentPage(link.url),
                                    ['text-teal-500 dark:text-teal-400']: isCurrentPage(link.url)
                                }
                            )}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
}

export { MenuMobileSubmenu };