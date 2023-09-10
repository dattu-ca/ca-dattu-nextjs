import React, {Suspense} from 'react';
import dynamic from 'next/dynamic'
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
// import {FiActivity} from 'react-icons/fi';
// import {GrAchievement} from 'react-icons/gr';
// import {RxActivityLog} from 'react-icons/rx'
// import clsx from "clsx";


const ReactIcon = ({icon, className}) => {


    
    const DynamicIcon = dynamic(function ReactIcon() {
        const match = /[A-Z0-9]/.exec(icon[0].toLowerCase() + icon.slice(1));
        const libStr = match ? icon.substring(0, match.index) : null;
        if (libStr) {
            const i = icon;
            switch (libStr) {
                // case 'Ai' :
                //     return import('react-icons/ai').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Bs' :
                //     return import('react-icons/bs').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Bi' :
                //     return import('react-icons/bi').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Cg' :
                //     return import('react-icons/cg').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Ci' :
                //     return import('react-icons/ci').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Di' :
                //     return import('react-icons/di').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Fi' :
                //     return import('react-icons/fi').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Fc' :
                //     return import('react-icons/fc').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                case 'Fa' :
                    return import('react-icons/fa6').then(mod => {
                        const Icon = mod[i];
                        return function Fa6Icon() { return  <Icon className={className}/> }
                    });
                // case 'Gi' :
                //     return import('react-icons/gi').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Go' :
                //     return import('react-icons/go').then(mod => {
                //         const Icon = mod[i];
                //         return () => <Icon className={className}/>
                //     });
                // case 'Gr' :
                //     return import('react-icons/gr').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Hi' :
                //     return import('react-icons/hi2').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Im' :
                //     return import('react-icons/im').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Lia' :
                //     return import('react-icons/lia').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Io' :
                //     return import('react-icons/io5').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Lu' :
                //     return import('react-icons/lu').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Md' :
                //     return import('react-icons/md').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Pi' :
                //     return import('react-icons/pi').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Ri' :
                //     return import('react-icons/ri').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Rx' :
                //     return import('react-icons/rx').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Si' :
                //     return import('react-icons/si').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Sl' :
                //     return import('react-icons/sl').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Tb' :
                //     return import('react-icons/tb').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Tfi' :
                //     return import('react-icons/tfi').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Ti' :
                //     return import('react-icons/ti').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Vsc' :
                //     return import('react-icons/vsc').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                // case 'Wi' :
                //     return import('react-icons/wi').then(mod => {
                //         const Icon = mod[i];
                //         Icon.displayName = Icon;
                //         return () => <Icon className={className}/>
                //     });
                default:
                    return import('react-icons/ai').then(mod => {
                        const Icon = mod.AiOutlineLoading3Quarters;                        
                        return () => <Icon className={className}/>
                    });
            }
        }
    }, {
        loading: () => <p>loading...</p>
    })

    const Icon = DynamicIcon(icon, className);
    return <Suspense fallback={<p>...Sus Main</p>}>
        {Icon}
    </Suspense>
}

export {ReactIcon}