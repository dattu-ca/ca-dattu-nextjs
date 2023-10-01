import {WrapperComponent} from "./wrapper";
import {AuthLoginContextProvider} from "./context";
import {IProvider} from "./types";

interface IProps {
    providers: Record<"google"
            | "github",
            IProvider>
        | null
}

const AuthLoginComponent = async ({providers}: IProps) => {
    return <AuthLoginContextProvider providers={providers}>
        <WrapperComponent/>
    </AuthLoginContextProvider>
}

export {
    AuthLoginComponent
}