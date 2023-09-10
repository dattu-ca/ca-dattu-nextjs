import {ReactElement} from "react";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getAuthSession} from "~/services";

interface IProps {
    children: ReactElement;
}

const RootLayout = async ({children}: IProps) => {
    const session = await getAuthSession()
    if (session) {
        redirect('/admin/dashboard', RedirectType.replace);
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default RootLayout;