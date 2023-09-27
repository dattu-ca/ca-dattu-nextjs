import {ReactElement} from "react";
import clsx from "clsx";
import {ErrorBannerComponent} from "./errorBanner";

interface IProps {
    children: ReactElement;
}

const Layout = async ({children}: IProps) => {
    return <div>
        <ErrorBannerComponent />
        <div className={clsx(
            'mt-4 md:mt-8',
            'wrapper-full-width'
        )}>
            {children}
        </div>
    </div>
}

export default Layout;