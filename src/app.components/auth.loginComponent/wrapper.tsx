'use client';
import clsx from "clsx";

import {AuthProviderButton} from "./button";
import {useAuthLoginContext} from "./context";
import {IProvider} from "./types";

const WrapperComponent = () => {
    const {ctxData: {providers, textContent}} = useAuthLoginContext();
    return <div className={clsx(
        'text-center'
    )}>
        <h1>{textContent.title}</h1>
        {
            providers
                .map((provider: IProvider) => (
                    <div key={provider.name}
                         className={clsx()}>
                        <AuthProviderButton provider={provider}/>
                    </div>
                ))
        }
    </div>
}

export {
    WrapperComponent
};