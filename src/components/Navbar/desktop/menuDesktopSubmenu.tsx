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
        'absolute right-0 top-[calc(100%+3px)]',
    )}>
        <ul className={clsx(
            'list-none p-0 m-0',
            'whitespace-nowrap',
            'transition',
            'bg-black',
            {
                ['h-0 overflow-hidden']: !isOpen,
                ['h-full']: isOpen
            }
        )}>
            {
                links.map(link => (
                    <li key={link.id}
                        className={clsx(
                            'm-0',
                            'px-4 py-2',
                        )}
                    >
                        <Link href={link.url}
                              tabIndex={isOpen ? undefined : -1}
                              aria-current={getAriaCurrent(link.url)}
                              className={clsx(
                                  'text-site-primary',
                                  'text-lg',
                                  {
                                      ['after:w-full']: isCurrentPage(link.url)
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