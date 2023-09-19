'use client';
import clsx from "clsx";

import {ProviderButton} from "./providerButton";
import {useAuthLoginContext} from "./context";
import {IProvider} from "./types";

const WrapperComponent = () => {
    const {ctxData: {providers}} = useAuthLoginContext();
    return <div className={clsx('mt-8 mr-4 ml-4')}>
        <div className={clsx(
            'mx-auto',
            'w-full md:w-[400px] lg:w-[600px]',
            'bg-white',
            'py-48 px-4',
            'shadow-xl'
        )}>
            <h1 className={clsx('text-center', 'font-acme',)}>Login</h1>
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
    </div>
}

export {
    WrapperComponent
};