import {Fragment, ReactElement} from "react";
import {getAuthSession} from "~/auth.services";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";

interface IProps {
    children: ReactElement;
}

const Layout = async ({children}: IProps) => {
    const session = await getAuthSession();
    if (!session) {
        return redirect('/', RedirectType.push);
    }

    return <Fragment>
        {children}
    </Fragment>
}

export default Layout;