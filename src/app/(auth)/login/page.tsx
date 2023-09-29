import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getProviders} from "next-auth/react";
import {AuthLoginComponent} from "~/components/authLoginComponent";
import {getAuthSession} from "~/auth.services";


const Page = async () => {
    const session = await getAuthSession();
    if (session) {
        return redirect('/dashboard', RedirectType.replace);
    }
    const providers = await getProviders();
    return <div>
        <AuthLoginComponent providers={providers}/>
    </div>
}

export default Page;