import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getAuthSession} from "~/auth.services";
import {AuthErrorComponent} from "~/app.components/auth.errorComponent";
import {siteAuthConfigServices} from "~/services";

export const revalidate = 86400;

const Page = async () => {
    const session = await getAuthSession();
    if (session) {
        return redirect('/dashboard', RedirectType.replace);
    }
    const cmsContent = await siteAuthConfigServices.fetch();

    return <div>
        <AuthErrorComponent textContent={{
            title: cmsContent?.errorTitle ?? 'Error',
            button: cmsContent?.errorButton ?? 'Go back to login'
        }}/>
    </div>
}

export default Page;
