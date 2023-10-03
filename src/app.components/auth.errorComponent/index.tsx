import Link from "next/link";
import clsx from "clsx";

const AuthErrorComponent = () => {
    return <div className={clsx(
        'text-center'
    )}>
        <h1>Access Denied</h1>
        <Link href='/login'
              className={clsx(
                  'daisyui-btn daisyui-btn-wide',
              )}>
            Go back to login
        </Link>
    </div>
}

export {
    AuthErrorComponent
}