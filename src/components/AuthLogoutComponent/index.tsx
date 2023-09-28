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

    return <div className={clsx()}>
        <h1>Are you sure?</h1>
        <button
            disabled={hasClicked}
            onClick={onClickHandler}
            className={clsx()}>
            Yes, get me out of here!!!!
        </button>
    </div>
}

export {
    AuthLogoutComponent
}