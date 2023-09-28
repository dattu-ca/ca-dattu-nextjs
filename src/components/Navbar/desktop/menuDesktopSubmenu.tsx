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

    return <div className=className={clsx()}>
        <ul className=className={clsx()}>
            {
                links.map(link => (
                    <li key={link.id}
                        className=className={clsx()}
                    >
                        <Link href={link.url}
                              tabIndex={isOpen ? undefined : -1}
                              aria-current={getAriaCurrent(link.url)}
                              className=className={clsx()}
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