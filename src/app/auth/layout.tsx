import {ReactElement} from "react";
import {getAuthSession} from "~/services";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";

interface IProps {
    children: ReactElement;
}
const AuthLayout = async ({children}: IProps) => {
    const session = await getAuthSession();
    if(session){
        return redirect('/admin/dashboard', RedirectType.replace);
    }
    return children
}
export default AuthLayout