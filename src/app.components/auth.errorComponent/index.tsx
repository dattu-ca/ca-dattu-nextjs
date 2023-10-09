import Link from "next/link";
import clsx from "clsx";


interface IProps {
    textContent: {
        title: string;
        button: string;
    }
}
const AuthErrorComponent = ({textContent} : IProps) => {
    return <div className={clsx(
        'text-center'
    )}>
        <h1>{textContent.title}</h1>
        <Link href='/login'
              className={clsx(
                  'daisyui-btn daisyui-btn-wide',
              )}>
            {textContent.button}
        </Link>
    </div>
}

export {
    AuthErrorComponent
}