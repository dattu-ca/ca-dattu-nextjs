'use client';
import clsx from "clsx";
import {signIn} from "next-auth/react";
import {FaGoogle} from "react-icons/fa6";

import {IProvider} from "./types";
import {useAuthLoginContext} from "./context";

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
                className={clsx()}>
            <div className={clsx()}>
                <div>
                    {
                        getIcon(provider as IProvider) === 'FaGoogle'
                        && <FaGoogle className={clsx()}/>
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