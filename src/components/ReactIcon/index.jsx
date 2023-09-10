import React, {Suspense} from 'react';
import dynamic from 'next/dynamic'
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import clsx from "clsx";


const ReactIcon = ({icon, className}) => {
    const DynamicIcon = dynamic(() => {
        const match = /[A-Z0-9]/.exec(icon[0].toLowerCase() + icon.slice(1));
        const libStr = match ? icon.substring(0, match.index) : null;
        if (libStr) {
            const i = icon;
            switch (libStr) {
                case 'Ai' :
                    return import('react-icons/ai', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Bs' :
                    return import('react-icons/bs', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Bi' :
                    return import('react-icons/bi', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Cg' :
                    return import('react-icons/cg', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Ci' :
                    return import('react-icons/ci', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Di' :
                    return import('react-icons/di', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Fi' :
                    return import('react-icons/fi', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Fc' :
                    return import('react-icons/fc', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Fa' :
                    return import('react-icons/fa6', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Gi' :
                    return import('react-icons/gi', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Go' :
                    return import('react-icons/go', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Gr' :
                    return import('react-icons/gr', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Hi' :
                    return import('react-icons/hi2', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Im' :
                    return import('react-icons/im', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Lia' :
                    return import('react-icons/lia', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Io' :
                    return import('react-icons/io5', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Lu' :
                    return import('react-icons/lu', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Md' :
                    return import('react-icons/md', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Pi' :
                    return import('react-icons/pi', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Ri' :
                    return import('react-icons/ri', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Rx' :
                    return import('react-icons/rx', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Si' :
                    return import('react-icons/si', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Sl' :
                    return import('react-icons/sl', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Tb' :
                    return import('react-icons/tb', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Tfi' :
                    return import('react-icons/tfi', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Ti' :
                    return import('react-icons/ti', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Vsc' :
                    return import('react-icons/vsc', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                case 'Wi' :
                    return import('react-icons/wi', { ssr : false}).then(mod => {
                        const Icon = mod[i];
                        Icon.displayName = Icon;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
                default:
                    return import('react-icons/ai', { ssr : false}).then(mod => {
                        const Icon = mod.AiOutlineLoading3Quarters;
                        return function ReactIcon() {
                            return <Icon className={className}/>
                        }
                    });
            }
        }
    }, {
        loading: () => <AiOutlineLoading3Quarters className={clsx(
            className,
            'animate-spin'
        )}/>
    })

    const Icon = DynamicIcon(icon, className);
    return <Suspense fallback={<AiOutlineLoading3Quarters className={clsx(className, 'animate-spin')}/>}>
        {Icon}
    </Suspense>
}

export {ReactIcon}