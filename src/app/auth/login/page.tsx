import {getProviders} from "next-auth/react";
import {AuthLoginComponent} from "~/components/AuthLoginComponent";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getAuthSession} from "~/services";

interface IProps {
    searchParams: {
        callbackUrl?: string;
        error?: string;
    }
}

const Page = async ({searchParams}: IProps) => {
    const session = await getAuthSession();
    if(session){
        return redirect('/admin/dashboard', RedirectType.replace);
    }
    const providers = await getProviders();
    return <div>
        <AuthLoginComponent providers={providers} 
                            error={searchParams.error}/>
    </div>
}

export default Page;
