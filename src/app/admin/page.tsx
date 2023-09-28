import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";


const Page = () => {
    return redirect('/admin/dashboard', RedirectType.replace);
}

export default Page;
