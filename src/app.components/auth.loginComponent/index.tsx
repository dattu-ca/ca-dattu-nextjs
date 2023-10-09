import {WrapperComponent} from "./wrapper";
import {AuthLoginContextProvider} from "./context";
import {IProvider} from "./types";

interface IProps {
    providers: Record<"google"
            | "github",
            IProvider>
        | null;
    textContent: {
        title: string;
        button: string;
    }
}

const AuthLoginComponent = async ({providers, textContent}: IProps) => {
    return <AuthLoginContextProvider providers={providers} textContent={textContent}>
        <WrapperComponent/>
    </AuthLoginContextProvider>
}

export {
    AuthLoginComponent
}