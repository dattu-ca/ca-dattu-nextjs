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
        'mx-auto',
        'w-full',
        'py-4 px-4',
        'bg-red-700 text-white text-center',
        'shadow-sm'
    )}>
        <div className={clsx(
            'flex justify-center items-center gap-4'
        )}>
            <div>
                <FiAlertCircle className={' w-6 h-6'}/>
            </div>
            <div>
                <p className={'p-0 m-0'}>{error}</p>
            </div>
        </div>
    </div>
}

export {
    ErrorBannerComponent
};