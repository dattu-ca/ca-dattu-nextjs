import React from 'react';
import clsx from "clsx";
import Link from "next/link";
import {useNavbarContext} from "../context";
import {ILink} from "~/models";

interface IProps {
    id: string;
    links: ILink[]
}

const MenuMobileSubmenu = ({id, links}: IProps) => {
    const {ctxData: {subMenuOpenId}, ctxFunctions: {isCurrentPage, getAriaCurrent, closeMobileMenu}} = useNavbarContext();
    const isOpen = id === subMenuOpenId

    return <div className={clsx()}>
        <ul className={clsx()}>
            {
                links.map(link => (
                    <li key={link.label}
                        className={clsx()}>
                        <Link href={link.url}
                              tabIndex={isOpen ? undefined : -1}
                              aria-current={getAriaCurrent(link.url)}
                              onClick={() => closeMobileMenu()}
                              className={clsx()}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
}

export {MenuMobileSubmenu};