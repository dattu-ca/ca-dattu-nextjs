import {getAuthSession} from "~/auth.services";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {AuthErrorComponent} from "~/components/AuthErrorComponent";

const Page = async () => {
    const session = await getAuthSession();
    if(session){
        return redirect('/admin/dashboard', RedirectType.replace);
    }

    return <div>
        <AuthErrorComponent/>
    </div>
}

export default Page;
