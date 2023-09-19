'use client';
import clsx from "clsx";

import {useAuthLoginContext} from "./context";
import {ReactIcon} from "~/components/ReactIcon";

const ErrorComponent = () => {
    const {ctxData: {error}} = useAuthLoginContext();
    if(!error){
        return null;
    }
    return <div className={clsx('m-0 mb-4')}>
        <div className={clsx(
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
                    <ReactIcon icon={'FiAlertCircle'}
                               className={' w-6 h-6'}/>
                </div>
                <div>
                    <p className={'p-0 m-0'}>There was an error when trying to login. Please try again.</p>
                </div>
            </div>
            
            
        </div>
    </div>
}

export {
    ErrorComponent
};