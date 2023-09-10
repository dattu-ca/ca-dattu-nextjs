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
    return <div className={clsx('mt-8')}>
        <div className={clsx(
            'mx-auto',
            'w-[500px]',
            'bg-white',
            'py-8 px-4',            
        )}>
            <h1 className={clsx('text-center')}>Login</h1>
            {Object.values(providers).filter(provider => provider.name !== 'Credentials').map((provider) => (
                <div key={provider.name}
                     className={clsx(
                         'mb-8',
                         'text-center'
                     )}>
                    <button onClick={() => signIn(provider.id)}>

                        <div className={clsx(
                            'flex gap-4 align-center items-center'
                        )}>
                            <div>
                                <ReactIcon icon={getIcon(provider as IProvider)} className={'w-12 h-12'}/>
                            </div>
                            <div className={clsx('text-2xl')}>Sign in with {provider.name}</div>
                        </div>
                    </button>
                </div>
            ))}
            <pre className={clsx('text-left')}>{JSON.stringify(providers, null, 2)}</pre>
        </div>
    </div>
}

export {
    LoginComponent
};