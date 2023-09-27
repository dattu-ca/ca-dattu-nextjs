import {BlogAuthor} from "~/models";
import clsx from "clsx";
import React from "react";

interface IProps {
    author: BlogAuthor;
    className?: string | undefined;
}

const AuthorAvatar = ({author, className}: IProps) => {
    const {name, avatar, avatarInitials} = author;
    return <div className={clsx(
        'daisyui-avatar daisyui-placeholder',
    )}>
        <div className={clsx(
            'rounded-full',
            className,
            {
                ['bg-neutral-focus text-neutral-content']: !avatar,
                ['ring ring-site-secondary-light']: avatar
            }
        )}>
            {
                avatar
                    ? <img src={avatar.desktopImage?.url}
                           alt={name}/>
                    : <span className="text-xs">{avatarInitials}</span>
            }
        </div>
    </div>
}

export {
    AuthorAvatar
}