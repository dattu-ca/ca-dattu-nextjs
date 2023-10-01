import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getAuthSession} from "~/auth.services";
import {AuthLogoutComponent} from "~/app.components/auth.logoutComponent";

const Page = async () => {
    const session = await getAuthSession();
    if (!session) {
        return redirect('/', RedirectType.replace);
    }

    return <div>
        <AuthLogoutComponent/>
    </div>
}

export default Page;
