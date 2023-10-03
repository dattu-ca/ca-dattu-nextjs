import clsx from "clsx";

interface IProps {
    skipToId: string;
}

const SkipLink = ({skipToId}: IProps) => {
    return <div>
        <a href={`#${skipToId}`}
           className={clsx(
               'transition-all ',
               'fixed z-[999] ',
               'top-0 left-[50%] translate-x-[-50%] ',
               'translate-y-[-100%] ',
               'focus:translate-y-1.5'
           )}>Skip to main Content</a>
    </div>
}

export {
    SkipLink
}