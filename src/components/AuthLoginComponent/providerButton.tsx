'use client';
import clsx from "clsx";
import {signIn} from "next-auth/react";

import {IProvider} from "./types";
import {useAuthLoginContext} from "./context";
import {FaGoogle} from "react-icons/fa6";

interface IProps {
    provider: IProvider
}

const ProviderButton = ({provider}: IProps) => {
    const {ctxData: {clickedProvider}, ctxFns: {setClickedProvider}} = useAuthLoginContext();

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
            signIn(provider.id).then(r => r);
        }
    }

    return (
        <button onClick={onClickHandler}
                disabled={Boolean(clickedProvider)}
                className={clsx(
                    'text-xl',
                    'btn-contained-secondary',
                    {
                        ['animate-pulse']: clickedProvider === provider.id
                    }
                )}>
            <div className={clsx(
                'flex gap-4 align-center items-center',
            )}>
                <div>
                    {
                        getIcon(provider as IProvider) === 'FaGoogle'
                        && <FaGoogle className={
                            clsx('w-6 h-6', {
                                ['animate-spin']: clickedProvider === provider.id
                            })
                        }/>
                    }
                </div>
                <div>
                    <span>Sign in with {provider.name}</span>
                </div>
            </div>
        </button>
    )
}

export {
    ProviderButton
};