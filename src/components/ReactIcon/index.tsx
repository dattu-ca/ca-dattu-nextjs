import {ReactIconJs} from './icon';
// import { BiAlarm } from 'react-icons/bi'

interface IProps {
    icon: string;
    className?: string;
    [x:string]: any;
}

const ReactIcon = ({icon, className}: IProps) => <ReactIconJs icon={icon} className={className}/>
// const ReactIcon = ({icon, className}: IProps) => <BiAlarm className={className}/>


export {ReactIcon}