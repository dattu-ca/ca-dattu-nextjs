import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getAuthSession} from "~/auth.services";
import {AuthLogoutComponent} from "~/app.components/auth.logoutComponent";
import {authConfigServices} from "~/services";
import {SERVER_CONFIG} from "~/utils/config.server";

const Page = async () => {
    const session = await getAuthSession();
    if (!session) {
        return redirect('/', RedirectType.replace);
    }

    const cmsContent = await authConfigServices.fetchBySlug(SERVER_CONFIG.CONTENT_SLUGS.PRIMARY_AUTH_CONFIG);

    return <div>
        <AuthLogoutComponent textContent={{
            title: cmsContent.logoutTitle,
            button: cmsContent.logoutButton
        }}/>
    </div>
}

export default Page;
