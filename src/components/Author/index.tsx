import {IBlogAuthor} from "~/models";
import clsx from "clsx";
import React from "react";
import {CustomRichTexRenderer} from "../CustomRichTextRenderer";
import {BannerComponent} from "../Banner";

interface IProps {
    author: IBlogAuthor
}

const AuthorComponent = ({author}: IProps) => {
    const {name, bio, banners} = author;
    return <div className={clsx(
        'pb-4'
    )}>
        {
            banners && <BannerComponent banners={banners}/>
        }
        <div className={clsx(
            'overflow-y-auto',
            'mt-8',
            'container',
        )}>
            <div className={clsx(
                'bg-white p-4 md:p-8',
                'shadow-sm',
            )}>
                <div className={clsx(
                    'flex justify-start items-center gap-4',
                    'pb-4 md:pb-8'
                )}>
                    <div className={clsx('daisyui-avatar daisyui-placeholder')}>
                        <div
                            className={clsx(
                                'w-16 h-16 rounded-full',
                                {
                                    ['bg-neutral-focus text-neutral-content']: !author.avatar,
                                    ['ring ring-site-secondary-light']: author.avatar
                                }
                            )}>
                            {
                                author.avatar
                                    ? <img src={author.avatar.desktopImage?.url}
                                           alt={author.name}/>
                                    : <span className="text-xs">{author.avatarInitials}</span>
                            }

                        </div>
                    </div>
                    <h1 className={clsx('mb-0')}>{name}</h1>
                </div>
                <CustomRichTexRenderer document={bio}/>
            </div>
        </div>
    </div>
}

export {
    AuthorComponent
}