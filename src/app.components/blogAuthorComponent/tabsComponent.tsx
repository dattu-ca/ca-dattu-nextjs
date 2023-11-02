'use client'
import Link from "next/link";
import {useSelectedLayoutSegment} from 'next/navigation'
import {BlogAuthor} from "~/models";
import clsx from "clsx";
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";

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
        <DefaultBlocksLayout allFormats={'Container Width'}>
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
        </DefaultBlocksLayout>
    </>
}

export {
    BlogAuthorTabsComponent
};