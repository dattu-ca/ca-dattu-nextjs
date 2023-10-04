import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getProviders} from "next-auth/react";
import {AuthLoginComponent} from "~/app.components/auth.loginComponent";
import {getAuthSession} from "~/auth.services";
import {authConfigServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";


const Page = async () => {
    const session = await getAuthSession();
    if (session) {
        return redirect('/dashboard', RedirectType.replace);
    }
    const cmsContent = await authConfigServices.fetchBySlug(SERVER_CONFIG.CONTENT_SLUGS.PRIMARY_AUTH_CONFIG);
    const providers = await getProviders();
    return <div>
        <AuthLoginComponent providers={providers}
                            textContent={{
                                title: cmsContent.loginTitle,
                                button: cmsContent.loginButton
                            }}/>
    </div>
}

export default Page;
