import {AuthLoginComponent} from "~/components/AuthLoginComponent";
import {getProviders} from "next-auth/react";

const Page = async () => {
    const providers = await getProviders();
    return <div>
        <AuthLoginComponent providers={providers} />
    </div>
}

export default Page;
