'use client';
import {useState} from "react";
import clsx from "clsx";
import {signOut} from "next-auth/react";
import {BiLoaderCircle} from "react-icons/bi";
import {MdLogout} from "react-icons/md";

interface IProps {
    textContent: {
        title: string;
        button: string;
    }
}

const AuthLogoutComponent = ({textContent} : IProps) => {
    const [hasClicked, setHasClicked] = useState<boolean>(false);

    const onClickHandler = () => {
        setHasClicked(true);
        signOut({
            callbackUrl: '/'
        }).then((r) => console.log(r));
    }

    return <div className={clsx(
        'text-center'
    )}>
        <h1>{textContent.title}</h1>
        <button
            disabled={hasClicked}
            onClick={onClickHandler}
            className={clsx(
                'daisyui-btn daisyui-btn-block sm:flex-nowrap',
            )}>
            <span className={clsx(
                'daisyui-swap daisyui-swap-rotate',
                {
                    ['daisyui-swap-active']: hasClicked
                }
            )}>
                <BiLoaderCircle className={clsx(
                    "animate-spin daisyui-swap-on"
                )}/>
                <MdLogout className={clsx(
                    'daisyui-swap-off'
                )}/>
            </span>
            <span>
                {textContent.button}
            </span>
        </button>
    </div>
}

export {
    AuthLogoutComponent
}