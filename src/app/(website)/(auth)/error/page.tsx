import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getAuthSession} from "~/auth.services";
import {AuthErrorComponent} from "~/app.components/auth.errorComponent";
import {siteAuthConfigServices} from "~/services";

const Page = async () => {
    const session = await getAuthSession();
    if (session) {
        return redirect('/dashboard', RedirectType.replace);
    }
    const cmsContent = await siteAuthConfigServices.fetchBySlug();

    return <div>
        <AuthErrorComponent textContent={{
            title: cmsContent.errorTitle,
            button: cmsContent.errorButton
        }}/>
    </div>
}

export default Page;
