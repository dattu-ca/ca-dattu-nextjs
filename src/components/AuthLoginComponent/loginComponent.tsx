'use client';
import clsx from "clsx";

import {signIn} from "next-auth/react";
import {ReactIcon} from '~/components/ReactIcon';

interface IProvider {
    name: string;
    id: string;
}

interface IProps {
    providers: Record<"credentials"
            | "google"
            | "github",
            IProvider>
        | null
}

const LoginComponent = ({providers}: IProps) => {
    if(!providers){
        return null;
    }
    
    const getIcon = (provider: IProvider) => {
        if (provider.name === 'Google') {
            return 'FcGoogle';
        }
        if (provider.name === 'GitHub') {
            return 'AiFillGithub';
        }
        return 'GiStarGate';

    }
    return <div>
        <div className={clsx(
            'mx-auto',
            'w-[500px]',
            'bg-white',
            'py-8 px-4'
        )}>
            <h1>Login</h1>
            {Object.values(providers).filter(provider => provider.name !== 'Credentials').map((provider) => (
                <div key={provider.name}
                     className={clsx(
                         'mb-2'
                     )}>
                    <button onClick={() => signIn(provider.id)}>

                        <div className={clsx(
                            'flex gap-2 align-center items-center'
                        )}>
                            <div>
                                <ReactIcon icon={getIcon(provider as IProvider)} className={'w-6 h-6'}/>
                            </div>
                            <div>Sign in with {provider.name}</div>
                        </div>
                    </button>
                </div>
            ))}
            <pre>{JSON.stringify(providers, null, 2)}</pre>

        </div>
    </div>
}

export {
    LoginComponent
};