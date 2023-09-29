import clsx from "clsx";
import {ReactElement} from "react";

interface IProps {
    children: ReactElement
}

const LayoutBackground = ({children}: IProps) => {
    return (
        <div className={clsx(
            'flex w-full'
        )}>
            <div className={clsx(
                'fixed inset-0 flex justify-center sm:px-8'
            )}>
                <div className={clsx(
                    'flex w-full max-w-7xl lg:px-8'
                )}>
                    <div className={clsx(
                        'w-full',
                        'ring-1 ',
                        'bg-white ring-zinc-100 ',
                        'dark:bg-zinc-900 dark:ring-zinc-300/20'
                    )}/>
                </div>
            </div>
            <div className={clsx(
                'relative flex w-full flex-col'
            )}>
                {children}
            </div>
        </div>
    )
}

export {
    LayoutBackground
}

