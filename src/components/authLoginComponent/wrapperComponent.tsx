'use client';
import clsx from "clsx";

import {ProviderButton} from "./providerButton";
import {useAuthLoginContext} from "./context";
import {IProvider} from "./types";

const WrapperComponent = () => {
    const {ctxData: {providers}} = useAuthLoginContext();
    return <div className={clsx()}>
        <h1>Login</h1>
        {
            providers
                .map((provider: IProvider) => (
                    <div key={provider.name}
                         className={clsx()}>
                        <ProviderButton provider={provider}/>
                    </div>
                ))
        }
    </div>
}

export {
    WrapperComponent
};