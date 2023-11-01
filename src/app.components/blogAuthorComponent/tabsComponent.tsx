'use client'
import Link from "next/link";
import {useSelectedLayoutSegment} from 'next/navigation'
import {BlogAuthor} from "~/models";
import {MetaContainer} from "./metaContainer";
import clsx from "clsx";

interface IProps {
    author: BlogAuthor
}

const BlogAuthorTabsComponent = ({author}: IProps) => {
    const segment = useSelectedLayoutSegment();

    const links = [
        {url: `/author/${author.slug}`, label: 'About', segment: 'about'},
        {url: `/author/${author.slug}/posts`, label: 'Articles', segment: 'posts'}
    ]


    return <>
        <MetaContainer allFormats={'Container Width'}>
            <div className="daisyui-tabs">
                {
                    links.map(link => (
                        <Link key={link.label} href={link.url}
                              scroll={false}
                              className={clsx(
                                  'daisyui-tab daisyui-tab-lg daisyui-tab-bordered',
                                  {
                                      ['daisyui-tab-active']: segment === link.segment
                                  }
                              )}>{link.label}</Link>
                    ))
                }
            </div>
            <div className={clsx(
                'daisyui-divider my-0',
                'translate-y-[-9px]'
            )}></div>
        </MetaContainer>
    </>
}

export {
    BlogAuthorTabsComponent
};