import clsx from "clsx";
import Link from "next/link";
import React from "react";

const AuthErrorComponent = () => {

    return <div className={clsx('mt-8 mr-4 ml-4')}>
        <div className={clsx(
            'mx-auto',
            'w-full md:w-[400px] lg:w-[600px]',
            'bg-white',
            'py-48 px-4',
            'shadow-sm',
            'text-center'
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
    </div>
}

export {
    AuthErrorComponent
}