'use client';
import clsx from "clsx";
import {useSearchParams} from 'next/navigation';


const ErrorBannerComponent = () => {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    if (!error) {
        return null;
    }
    return <div className={clsx()}>
        <div className={clsx()}>
            <div>
                
            </div>
            <div>
                <p className={clsx()}>{error}</p>
            </div>
        </div>
    </div>
}

export {
    ErrorBannerComponent
};