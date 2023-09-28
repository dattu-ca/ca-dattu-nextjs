import clsx from "clsx";
import {BlogAuthor} from "~/models";

interface IProps {
    author: BlogAuthor;
    className?: string | undefined;
}

const AuthorAvatar = ({author, className}: IProps) => {
    const {name, avatar, avatarInitials} = author;
    return <div className={clsx()}>
        <div className={clsx(className)}>
            {
                avatar
                    ? <img src={avatar.desktopImage?.url}
                           alt={name}/>
                    : <span className={clsx()}>{avatarInitials}</span>
            }
        </div>
    </div>
}

export {
    AuthorAvatar
}