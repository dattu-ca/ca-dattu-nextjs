'use client';
import clsx from "clsx";
import {signIn} from "next-auth/react";
import {FaGoogle} from "react-icons/fa6";

import {IProvider} from "./types";
import {useAuthLoginContext} from "./context";
import {BiLoaderCircle} from "react-icons/bi";

interface IProps {
    provider: IProvider
}

const AuthProviderButton = ({provider}: IProps) => {
    const {ctxData: {clickedProvider, textContent}, ctxFns: {setClickedProvider}} = useAuthLoginContext();

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
                    'daisyui-btn daisyui-btn-block sm:flex-nowrap',
                )}>
            <div className={clsx(
                'daisyui-swap daisyui-swap-rotate',
                {
                    ['daisyui-swap-active']: clickedProvider === provider.id
                }
            )}>
                <BiLoaderCircle className={clsx(
                    "animate-spin daisyui-swap-on"
                )}/>
                <span className={clsx(
                    'daisyui-swap-off'
                )}>
                    {
                        getIcon(provider as IProvider) === 'FaGoogle'
                        && <FaGoogle className={clsx()}/>
                    }
                </span>
            </div>
            <span>{textContent.button} {provider.name}</span>
        </button>
    )
}

export {
    AuthProviderButton
};