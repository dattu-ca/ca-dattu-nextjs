import {ReactElement} from "react";
import clsx from "clsx";


interface IProps {
    children: ReactElement
}

const H1Heading = ({children}: IProps) => {
    return (
        <div className={clsx(
            'sm:px-8'
        )}>
            <div className={clsx(
                'mx-auto w-full max-w-7xl lg:px-8'
            )}>
                <div className={clsx(
                    'relative px-4 sm:px-8 lg:px-12'
                )}>
                    <div className={clsx(
                        'mx-auto max-w-2xl lg:max-w-5xl'
                    )}>
                        <div className={clsx(
                            'max-w-2xl'
                        )}>
                            <h1>{children}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    H1Heading
}