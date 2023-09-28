'use client';
import clsx from "clsx";
import Link from "next/link";
import {useNavbarContext} from "../context";


const MenuLoggedInDesktop = () => {
    const {
        ctxData: {
            authLinks,
        },
        ctxFunctions: {
            isCurrentPage,
            getAriaCurrent,
        }
    } = useNavbarContext();


    return (
        <ul className={clsx()}>
            {
                authLinks.map(link => (
                    <li key={link.label}>
                        <Link aria-current={getAriaCurrent(link.url)}
                              href={link.url}
                              className={clsx()}>
                            {link.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export {MenuLoggedInDesktop};