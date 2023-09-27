import clsx from "clsx";
import Link from "next/link";
import React from "react";

const AuthErrorComponent = () => {

    return <div className={clsx(
        'bg-white p-4 md:p-8',
        'py-16 md:py-32',
        'text-center',
        'shadow-md'
    )}>
        <h1>Access Denied</h1>
        <Link href='/auth/login'
              className={clsx(
                  'text-lg',
                  'btn-text-primary',
              )}>
            Go back to login
        </Link>
    </div>
}

export {
    AuthErrorComponent
}