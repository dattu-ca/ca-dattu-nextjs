import {WrapperComponent} from "./wrapperComponent";
import {AuthLoginContextProvider} from "./context";
import {IProvider} from "./types";
import {ErrorComponent} from "./errorComponent";

interface IProps {
    error?: string | undefined;
    providers: Record<"google"
            | "github",
            IProvider>
        | null
}

const AuthLoginComponent = async ({error, providers}: IProps) => {
    return <AuthLoginContextProvider providers={providers} error={error}>
        <ErrorComponent />
        <WrapperComponent />
    </AuthLoginContextProvider>
}

export {
    AuthLoginComponent
}