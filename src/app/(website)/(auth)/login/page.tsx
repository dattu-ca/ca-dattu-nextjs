import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getProviders} from "next-auth/react";
import {AuthLoginComponent} from "~/app.components/auth.loginComponent";
import {getAuthSession} from "~/auth.services";
import {siteAuthConfigServices} from "~/services";


export const revalidate = 86400;

const Page = async () => {
    const session = await getAuthSession();
    if (session) {
        return redirect('/dashboard', RedirectType.replace);
    }
    const cmsContent = await siteAuthConfigServices.fetch();
    const providers = await getProviders();
    return <div>
        <AuthLoginComponent providers={providers}
                            textContent={{
                                title: cmsContent?.loginTitle ?? 'Login',
                                button: cmsContent?.loginButton ?? 'Login with '
                            }}/>
    </div>
}

export default Page;
