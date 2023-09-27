'use client';
import clsx from "clsx";

import {ProviderButton} from "./providerButton";
import {useAuthLoginContext} from "./context";
import {IProvider} from "./types";

const WrapperComponent = () => {
    const {ctxData: {providers}} = useAuthLoginContext();
    return <div className={clsx(
        'bg-white p-4 md:p-8',
        'py-16 md:py-32',
        'text-center',
        'shadow-md'
    )}>
        <h1>Login</h1>
        {
            providers
                .map((provider: IProvider) => (
                    <div key={provider.name}
                         className={clsx(
                             'mb-8 text-center',
                         )}>
                        <ProviderButton provider={provider}/>
                    </div>
                ))
        }
    </div>
}

export {
    WrapperComponent
};