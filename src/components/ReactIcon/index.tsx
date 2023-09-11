import {ReactIconJs} from './icon';

interface IProps {
    icon: string;
    className?: string;
}

const ReactIcon = ({icon, className}: IProps) => <ReactIconJs icon={icon} className={className}/>


export {ReactIcon}