import clsx from "clsx";
import Link from "next/link";
import React from "react";

const AuthErrorComponent = () => {

    return <div className={clsx()}>
        <h1>Access Denied</h1>
        <Link href='/auth/login'
              className={clsx()}>
            Go back to login
        </Link>
    </div>
}

export {
    AuthErrorComponent
}