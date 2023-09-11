import {getAuthSession} from "~/services";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";


const Page = async () => {
    const session = await getAuthSession();
    if(session){
        redirect('/admin/dashboard', RedirectType.replace);
    }
    else{
        redirect('/auth', RedirectType.push);
    }
}

export default Page;
