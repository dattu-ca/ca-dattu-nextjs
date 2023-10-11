import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getAuthSession} from "~/auth.services";
import {AuthLogoutComponent} from "~/app.components/auth.logoutComponent";
import {siteAuthConfigServices} from "~/services";

const Page = async () => {
    const session = await getAuthSession();
    if (!session) {
        return redirect('/', RedirectType.replace);
    }

    const cmsContent = await siteAuthConfigServices.fetch();

    return <div>
        <AuthLogoutComponent textContent={{
            title: cmsContent.logoutTitle,
            button: cmsContent.logoutButton
        }}/>
    </div>
}

export default Page;
