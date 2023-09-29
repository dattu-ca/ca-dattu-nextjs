import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import {getAuthSession} from "~/auth.services";
import {AuthErrorComponent} from "~/components/authErrorComponent";

const Page = async () => {
    const session = await getAuthSession();
    if(session){
        return redirect('/dashboard', RedirectType.replace);
    }

    return <div>
        <AuthErrorComponent/>
    </div>
}

export default Page;
