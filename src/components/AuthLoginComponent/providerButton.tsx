'use client';
import clsx from "clsx";
import {signIn} from "next-auth/react";

import {ReactIcon} from '~/components/ReactIcon';
import {IProvider} from "./types";

interface IProps {
    provider: IProvider
}

const ProviderButton = ({provider}: IProps) => {
    if (!provider) {
        return null;
    }

    const getIcon = (provider: IProvider) => {
        if (provider.name === 'Google') {
            return 'FaGoogle';
        }
        if (provider.name === 'GitHub') {
            return 'FaGithub';
        }
        return 'GiStarGate';

    }

    return (
        <button onClick={() => signIn(provider.id)}
                className={clsx(
                    'w-full',
                    'py-2 px-0 box-content',
                    
                    'daisyui-btn daisyui-btn-outline w-full',
                )}>
            <div className={clsx(
                'flex gap-4 align-center items-center',
            )}>
                <div>
                    <ReactIcon icon={getIcon(provider as IProvider)} className={'w-6 h-6'}/>
                </div>
                <div>
                    <span className={clsx('text-lg')}>Sign in with {provider.name}</span>
                </div>
            </div>
        </button>
    )
}

export {
    ProviderButton
};