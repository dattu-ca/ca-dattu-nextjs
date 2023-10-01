import {Fragment, ReactElement} from "react";
import clsx from "clsx";
import {BlocksLayout} from "~/app.ui.components/blocksLayout";
import {ErrorBannerComponent} from "./errorBanner";

interface IProps {
    children: ReactElement | ReactElement[];
}

const Layout = async ({children}: IProps) => {
    return <Fragment>
        <BlocksLayout layoutWidth='Container Width'>
            <div className={clsx('flex h-full  items-center justify-center')}>
                <div className={clsx(
                    'p-3',
                    'flex',
                    'flex-col',
                    'w-full max-w-[500px]',
                    'h-full max-h-[500px]',
                )}>
                    <ErrorBannerComponent/>
                    <div className={clsx(
                        'flex w-full h-full  items-center justify-center',
                        'p-8',
                        'border-2'
                    )}>
                        {children}
                    </div>
                </div>

            </div>
        </BlocksLayout>
    </Fragment>
}

export default Layout;