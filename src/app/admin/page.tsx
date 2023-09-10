import {redirect} from 'next/navigation';
import {RedirectType} from "next/dist/client/components/redirect";

const Page = async () => {
    redirect('/admin/dashboard', RedirectType.replace);
}

export default Page;
