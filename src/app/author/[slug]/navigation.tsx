'use client';
import React, {useCallback} from "react";
import clsx from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";


interface IProps {
    slug: string;
}

const AuthorNavigation = ({slug}: IProps) => {
    const path = usePathname();
    const links = [
        {
            label: 'Home',
            url: `/author/${slug}`
        },
        {
            label: 'About',
            url: `/author/${slug}/about`
        }
    ];

    const isCurrentPage = useCallback((url: string) => {
        if (url.endsWith('/about')) {
            return path === url;
        }
        if (url.endsWith(slug) && path.includes('/page/')) {
            return true;
        }
        if (url.endsWith(slug)) {
            return path === url;
        }
        return false;
    }, [path, slug]);

    const getAriaCurrent = useCallback((url: string) =>
        isCurrentPage(url) ? 'page' : undefined, [isCurrentPage]);


    return <div className={clsx()}>
        {
            links.map(link => (
                <Link key={link.url}
                      href={link.url}
                      aria-current={getAriaCurrent(link.url)}
                      className={clsx()}>
                    {link.label}
                </Link>
            ))
        }
    </div>
}
export {
    AuthorNavigation
};