'use client';
import clsx from "clsx";
import {signIn} from "next-auth/react";

import {ReactIcon} from '~/components/ReactIcon';
import {IProvider} from "./types";
import {useAuthLoginContext} from "./context";

interface IProps {
    provider: IProvider
}

const ProviderButton = ({provider}: IProps) => {
    const {ctxData: {clickedProvider}, ctxFns: {setClickedProvider}} = useAuthLoginContext()
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

    const onClickHandler = () => {
        if (!clickedProvider) {
            setClickedProvider(provider.id);
            signIn(provider.id).then(r => console.log(r));
        }
    }

    return (
        <button onClick={onClickHandler}
                className={clsx(
                    'py-2 px-0 box-content',
                    'daisyui-btn  w-[calc(100%-100px)] min-w-[300px]',
                    'drop-shadow',
                    'hover:bg-site-tertiary-dark hover:text-white',
                    {
                        ['daisyui-btn-outline daisyui-btn-neutral']: (!clickedProvider) || (clickedProvider && clickedProvider !== provider.id),
                        ['animate-pulse bg-site-tertiary-dark text-white']: clickedProvider === provider.id
                    }
                )}>
            <div className={clsx(
                'flex gap-4 align-center items-center',
            )}>
                <div>
                    <ReactIcon icon={getIcon(provider as IProvider)} className={
                        clsx('w-6 h-6', {
                            ['animate-spin']: clickedProvider === provider.id
                        })
                    }/>
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