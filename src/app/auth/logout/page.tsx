import {getAuthSession} from "~/services";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {AuthLogoutComponent} from "~/components/AuthLogoutComponent";

const Page = async () => {
    const session = await getAuthSession();
    if(!session){
        return redirect('/', RedirectType.replace);
    }

    return <div>
        <AuthLogoutComponent/>


    </div>
}

export default Page;
