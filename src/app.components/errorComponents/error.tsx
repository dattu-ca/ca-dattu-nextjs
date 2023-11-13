'use client';
import {useEffect} from 'react';
import {DefaultBlocksLayout} from "~/app.ui.components/blocksLayout/defaultBLocksLayout";
import {H1Heading} from "~/app.ui.components/h1Heading";
import clsx from "clsx";


interface IProps {
    error:  Error & { digest?: string };
    reset: () => void
}

const ErrorPageComponent = ({error, reset}: IProps) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className={clsx('mt-8')}>
            <H1Heading>Something went wrong!</H1Heading>
            <DefaultBlocksLayout>
                <div className={clsx('mt-8')}>
                    <button
                        onClick={reset}
                        className={clsx('daisyui-btn daisyui-btn-error')}

                    >
                        Try again
                    </button>
                </div>

            </DefaultBlocksLayout>
        </div>
    )
}

export {
    ErrorPageComponent
}