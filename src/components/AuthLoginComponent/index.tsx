import { getProviders } from "next-auth/react";
import {LoginComponent} from "~/components/AuthLoginComponent/loginComponent";

const AuthLoginComponent = async () => {
    const providers = await  getProviders();
    
    
    return <div>
        <LoginComponent providers={providers} />
    </div>
}

export { 
    AuthLoginComponent
}