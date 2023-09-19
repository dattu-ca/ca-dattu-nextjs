import clsx from "clsx";
import Link from "next/link";
import {Logo} from "~/components/Navbar/logo";
import React from "react";

const AuthErrorComponent = () => {

    return <div className={clsx('mt-8 mr-4 ml-4')}>
        <div className={clsx(
            'mx-auto',
            'w-full md:w-[400px] lg:w-[600px]',
            'bg-white',
            'py-48 px-4',
            'shadow-xl',
            'text-center'
        )}>
            <h1 className={clsx('font-acme',)}>Access Denied</h1>
            <Link href='/auth/login'
                  className={clsx(
                      'text-lg',
                      'py-2 px-0 box-content',
                      'daisyui-btn  w-[calc(100%-100px)] min-w-[300px]',
                      'drop-shadow',
                      'daisyui-btn-outline daisyui-btn-neutral',
                      'hover:bg-site-tertiary-dark hover:text-white',
                      'hover:after:w-0'
                  )}>
                Go back to login
            </Link>
        </div>
    </div>
}

export {
    AuthErrorComponent
}