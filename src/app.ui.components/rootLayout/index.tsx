import {ReactElement, Fragment} from "react";
import clsx from "clsx";

interface IProps {
    children: ReactElement | ReactElement[];
}

const RootLayoutComponent = ({children}: IProps) => {
    return (
        <Fragment>
            <div data-testid='scaffolding-blueprint'
                 className={clsx(
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
            <div data-testid='scaffolding-content'
                 className={clsx(
                'flex w-full items-stretch'
            )}>
                <div className={clsx(
                    'relative flex w-full flex-col'
                )}>
                    {children}
                </div>
            </div>
        </Fragment>
    )
}

export {
    RootLayoutComponent
}

