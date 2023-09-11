import {getProviders} from "next-auth/react";
import {AuthLoginComponent} from "~/components/AuthLoginComponent";

interface IProps {
    searchParams: {
        callbackUrl?: string;
        error?: string;
    }
}

const Page = async ({searchParams}: IProps) => {
    const providers = await getProviders();
    return <div>
        <AuthLoginComponent providers={providers} 
                            error={searchParams.error}/>
    </div>
}

export default Page;
