import {Fragment, ReactElement} from "react";
import clsx from "clsx";
import {BlocksLayout} from "~/app.ui.components/blocksLayout";
import {ErrorBannerComponent} from "./errorBanner";

interface IProps {
    children: ReactElement | ReactElement[];
}

const Layout = async ({children}: IProps) => {
    return <Fragment>
        <BlocksLayout format={{
            Xs: 'Container Width',
            Sm: 'Container Width',
            Md: 'Container Width',
            Lg: 'Container Width',
            Xl: 'Container Width'
        }}>
            <div className={clsx('flex h-full  items-center justify-center')}>
                <div className={clsx(
                    'p-3',
                    'flex',
                    'flex-col',
                    'w-full max-w-[800px]',
                    'h-full max-h-[800px]',
                )}>
                    <ErrorBannerComponent/>
                    <div className={clsx(
                        'flex w-full h-full  items-center justify-center',
                        'p-8 md:p-12 lg:p-16 xl:p-20',
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