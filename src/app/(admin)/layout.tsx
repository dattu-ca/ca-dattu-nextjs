import {Fragment, ReactElement} from "react";
import {getAuthSession} from "~/auth.services";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {BlocksLayout} from "~/app.ui.components/blocksLayout";

interface IProps {
    children: ReactElement | ReactElement[];
}

const Layout = async ({children}: IProps) => {
    const session = await getAuthSession();
    if (!session) {
        return redirect('/', RedirectType.push);
    }

    return <Fragment>
        <BlocksLayout format={{
            Xs: 'Container Width',
            Sm: 'Container Width',
            Md: 'Default',
            Lg: 'Narrow',
            Xl: 'Narrow'
        }}>
            {children}
        </BlocksLayout>
    </Fragment>
}

export default Layout;