'use client';
import {signOut} from "next-auth/react";
import clsx from "clsx";
import {useState} from "react";

const AuthLogoutComponent = () => {
    const [hasClicked, setHasClicked] = useState<boolean>(false);

    const onClickHandler = () => {
        setHasClicked(true);
        signOut({
            callbackUrl: '/'
        }).then(() => {

        });
    }

    return <div className={clsx('mt-8 mr-4 ml-4')}>
        <div className={clsx(
            'mx-auto',
            'w-full md:w-[400px] lg:w-[600px]',
            'bg-white',
            'py-48 px-4',
            'shadow-sm',
            'text-center'
        )}>
            <h1>Are you sure?</h1>
            <button
                disabled={hasClicked}
                onClick={onClickHandler}
                className={clsx(
                    'text-lg',
                    'btn-contained-secondary',
                    {
                        ['animate-pulse']: hasClicked
                    }
                )}
            >
                Yes, get me out of here!!!!
            </button>
        </div>
    </div>
}

export {
    AuthLogoutComponent
}