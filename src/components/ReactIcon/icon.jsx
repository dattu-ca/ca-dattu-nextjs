import React, {Suspense} from 'react';
import dynamic from 'next/dynamic'
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import clsx from "clsx";


const ReactIconJs = ({icon, className}) => {
    
    const DynamicIcon = dynamic(() => {
        const match = /[A-Z0-9]/.exec(icon[0].toLowerCase() + icon.slice(1));
        const libStr = match ? icon.substring(0, match.index) : null;
        if (libStr) {
            const i = icon;
            switch (libStr) {
                case 'Ai' :
                    return import('react-icons/ai').then(mod => mod[i]);
                case 'Bs' :
                    return import('react-icons/bs').then(mod => mod[i]);
                case 'Bi' :
                    return import('react-icons/bi').then(mod => mod[i]);
                case 'Cg' :
                    return import('react-icons/cg').then(mod => mod[i]);
                case 'Ci' :
                    return import('react-icons/ci').then(mod => mod[i]);
                case 'Di' :
                    return import('react-icons/di').then(mod => mod[i]);
                case 'Fi' :
                    return import('react-icons/fi').then(mod => mod[i]);
                case 'Fc' :
                    return import('react-icons/fc').then(mod => mod[i]);
                case 'Fa' :
                    return import('react-icons/fa6').then(mod => mod[i]);
                case 'Gi' :
                    return import('react-icons/gi').then(mod => mod[i]);
                case 'Go' :
                    return import('react-icons/go').then(mod => mod[i]);
                case 'Gr' :
                    return import('react-icons/gr').then(mod => mod[i]);
                case 'Hi' :
                    return import('react-icons/hi2').then(mod => mod[i]);
                case 'Im' :
                    return import('react-icons/im').then(mod => mod[i]);
                case 'Lia' :
                    return import('react-icons/lia').then(mod => mod[i]);
                case 'Io' :
                    return import('react-icons/io5').then(mod => mod[i]);
                case 'Lu' :
                    return import('react-icons/lu').then(mod => mod[i]);
                case 'Md' :
                    return import('react-icons/md').then(mod => mod[i]);
                case 'Pi' :
                    return import('react-icons/pi').then(mod => mod[i]);
                case 'Ri' :
                    return import('react-icons/ri').then(mod => mod[i]);
                case 'Rx' :
                    return import('react-icons/rx').then(mod => mod[i]);
                case 'Si' :
                    return import('react-icons/si').then(mod => mod[i]);
                case 'Sl' :
                    return import('react-icons/sl').then(mod => mod[i]);
                case 'Tb' :
                    return import('react-icons/tb').then(mod => mod[i]);
                case 'Tfi' :
                    return import('react-icons/tfi').then(mod => mod[i]);
                case 'Ti' :
                    return import('react-icons/ti').then(mod => mod[i]);
                case 'Vsc' :
                    return import('react-icons/vsc').then(mod => mod[i]);
                case 'Wi' :
                    return import('react-icons/wi').then(mod => mod[i]);
                default:
                    return import('react-icons/ai').then(mod => mod.AiOutlineLoading3Quarters);
            }
        }
    }, {
        loading: () => <AiOutlineLoading3Quarters className={clsx(className, 'animate-spin')} />
    })

    
    return <Suspense>
        <DynamicIcon className={className} />
    </Suspense>
}

export {ReactIconJs}