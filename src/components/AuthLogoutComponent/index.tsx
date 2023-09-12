'use client';
import {signOut} from "next-auth/react";

const AuthLogoutComponent = () => {

    const onClickHandler = () => {
        signOut({
            callbackUrl: '/'
        }).then(() => {

        });
    }

    return <div>
        <h1>ARe you sure?</h1>
        <button onClick={onClickHandler}>Yes, get me out of here!!!!</button>
    </div>
}

export {
    AuthLogoutComponent
}