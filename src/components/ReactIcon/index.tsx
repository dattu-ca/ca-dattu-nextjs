import React from 'react';
import {getIcon} from './icon';

interface IProps {
    icon: string,
    className?: string
}

const ReactIcon = ({icon, className}: IProps) => {
    const Icon = getIcon(icon);
    if (Icon) {
        return <Icon className={className}/>
    }
    return null;
}

export {ReactIcon}