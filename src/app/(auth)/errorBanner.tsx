'use client';
import clsx from "clsx";
import {useSearchParams} from 'next/navigation';
import {FiAlertCircle} from "react-icons/fi";


const ErrorBannerComponent = () => {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    if (!error) {
        return null;
    }
    return <div className={clsx(
        'daisyui-alert daisyui-alert-error',
        'rounded-none',
    )}>
        <FiAlertCircle className={clsx('w-8 h-8')}/>
        <p className={clsx('mb-0 pb-0')}>{error}</p>
    </div>
}

export {
    ErrorBannerComponent
};