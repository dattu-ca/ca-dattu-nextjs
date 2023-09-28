import clsx from "clsx";
import Link from "next/link";
import {ILink} from "~/models";
import {useNavbarContext} from "../context";


interface IProps {
    id: string;
    links: ILink[]
}

const MenuDesktopSubmenu = ({id, links}: IProps) => {
    const {
        ctxData: {
            subMenuOpenId
        },
        ctxFunctions: {
            getAriaCurrent,
            isCurrentPage,
            closeSubMenu
        }
    } = useNavbarContext();

    const isOpen = id === subMenuOpenId

    return <div className={clsx(
        'absolute'
    )}>
        <ul className={clsx(
            'shadow-lg shadow-zinc-800/5 backdrop-blur',
            'bg-white/90 text-zinc-800 ring-zinc-900/5',
            'dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10',
            'flex flex-col',
            {
                ['ring-1']: isOpen,
                ['h-0 overflow-hidden']: !isOpen
            }
        )}>
            {
                links.map(link => (
                    <li key={link.id}
                        className={clsx()}
                    >
                        <Link href={link.url}
                              tabIndex={isOpen ? undefined : -1}
                              aria-current={getAriaCurrent(link.url)}
                              className={clsx(
                                  'relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400',
                                  {
                                      ['text-teal-500 dark:text-teal-400']: isCurrentPage(link.url)
                                  }
                              )}
                              onClick={() => closeSubMenu(id)}
                        >{link.label}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
}

export {
    MenuDesktopSubmenu
}