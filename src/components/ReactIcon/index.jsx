import React, {Suspense} from 'react';
import dynamic from 'next/dynamic'
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {FiActivity} from 'react-icons/fi';
import {GrAchievement} from 'react-icons/gr';
import {RxActivityLog} from 'react-icons/rx'
import clsx from "clsx";


// const DynamicIcon2 = (icon, className) => dynamic(async () => {
//     const match = /[A-Z0-9]/.exec(icon[0].toLowerCase() + icon.slice(1));
//     const libStr = match ? icon.substring(0, match.index) : null;
//     const Xyz = () => <pre>{JSON.stringify({match, icon, className, libStr}, null, 2)}</pre>
//     return Xyz;
//     if (match) {
//        
//         switch (libStr) {
//             case 'Ai' :
//                 const {[icon]: Ai} = await import('react-icons/ai');
//                 if (Ai) {
//                     return {default: Ai}
//                 }
//                 break;
//             case 'Bs' :
//                 const {[icon]: Bs} = await import('react-icons/ai');
//                 if (Bs) {
//                     return {default: Bs}
//                 }
//                 break;
//             case 'Bi' :
//                 const {[icon]: Bi} = await import('react-icons/bi');
//                 if (Bi) {
//                     return {default: Bi}
//                 }
//                 break;
//             case 'Cg' :
//                 const {[icon]: Cg} = await import('react-icons/cg');
//                 if (Cg) {
//                     return {default: Cg}
//                 }
//                 break;
//             case 'Ci' :
//                 const {[icon]: Ci} = await import('react-icons/ci');
//                 if (Ci) {
//                     return {default: Ci}
//                 }
//                 break;
//             case 'Di' :
//                 const {[icon]: Di} = await import('react-icons/di');
//                 if (Di) {
//                     return {default: Di}
//                 }
//                 break;
//             case 'Fi' :
//                 const {[icon]: Fi} = await import('react-icons/fi');
//                 if (Fi) {
//                     return {default: Fi}
//                 }
//                 break;
//             case 'Fc' :
//                 const {[icon]: Fc} = await import('react-icons/fc');
//                 if (Fc) {
//                     return {default: Fc}
//                 }
//                 break;
//             case 'Fa' :
//                 const {[icon]: Fa} = await import('react-icons/fa6');
//                 console.log('FA', Fa);
//                 if (Fa) {
//                     return {default: Fa}
//                 }
//                 break;
//             case 'Gi' :
//                 const {[icon]: Gi} = await import('react-icons/gi');
//                 if (Gi) {
//                     return {default: Gi}
//                 }
//                 break;
//             case 'Go' :
//                 const {[icon]: Go} = await import('react-icons/go');
//                 if (Go) {
//                     return {default: Go}
//                 }
//                 break;
//             case 'Gr' :
//                 const {[icon]: Gr} = await import('react-icons/gr');
//                 if (Gr) {
//                     return {default: Gr}
//                 }
//                 break;
//             case 'Hi' :
//                 const {[icon]: Hi} = await import('react-icons/hi2');
//                 if (Hi) {
//                     return {default: Hi}
//                 }
//                 break;
//             case 'Im' :
//                 const {[icon]: Im} = await import('react-icons/im');
//                 if (Im) {
//                     return {default: Im}
//                 }
//                 break;
//             case 'Lia' :
//                 const {[icon]: Lia} = await import('react-icons/lia');
//                 if (Lia) {
//                     return {default: Lia}
//                 }
//                 break;
//             case 'Io' :
//                 const {[icon]: Io} = await import('react-icons/io5');
//                 if (Io) {
//                     return {default: Io}
//                 }
//                 break;
//             case 'Lu' :
//                 const {[icon]: Lu} = await import('react-icons/lu');
//                 if (Lu) {
//                     return {default: Lu}
//                 }
//                 break;
//             case 'Md' :
//                 const {[icon]: Md} = await import('react-icons/md');
//                 if (Md) {
//                     return {default: Md}
//                 }
//                 break;
//             case 'Pi' :
//                 const {[icon]: Pi} = await import('react-icons/pi');
//                 if (Pi) {
//                     return {default: Pi}
//                 }
//                 break;
//             case 'Ri' :
//                 const {[icon]: Ri} = await import('react-icons/ri');
//                 if (Ri) {
//                     return {default: Ri}
//                 }
//                 break;
//             case 'Rx' :
//                 const {[icon]: Rx} = await import('react-icons/rx');
//                 if (Rx) {
//                     return {default: Rx}
//                 }
//                 break;
//             case 'Si' :
//                 const {[icon]: Si} = await import('react-icons/si');
//                 if (Si) {
//                     return {default: Si}
//                 }
//                 break;
//             case 'Sl' :
//                 const {[icon]: Sl} = await import('react-icons/sl');
//                 if (Sl) {
//                     return {default: Sl}
//                 }
//                 break;
//             case 'Tb' :
//                 const {[icon]: Tb} = await import('react-icons/tb');
//                 if (Tb) {
//                     return {default: Tb}
//                 }
//                 break;
//             case 'Tfi' :
//                 const {[icon]: Tfi} = await import('react-icons/tfi');
//                 if (Tfi) {
//                     return {default: Tfi}
//                 }
//                 break;
//             case 'Ti' :
//                 const {[icon]: Ti} = await import('react-icons/ti');
//                 if (Ti) {
//                     return {default: Ti}
//                 }
//                 break;
//             case 'Vsc' :
//                 const {[icon]: Vsc} = await import('react-icons/vsc');
//                 if (Vsc) {
//                     return {default: Vsc}
//                 }
//                 break;
//             case 'Wi' :
//                 const {[icon]: Wi} = await import('react-icons/wi');
//                 if (Wi) {
//                     return {default: Wi}
//                 }
//                 break;
//             default:
//                 break;
//         }
//     }
//     return {
//         default: AiOutlineLoading3Quarters
//     }
// }, {
//     loading: () => <FiActivity className={clsx(
//         className,
//         'animate-spin'
//     )}/>,
//     ssr: false
// })



const DynamicIcon = dynamic(async () => {
    const i ='AiFillAlert'
    const {[i]: Icon} = await import('react-icons/ai', {ssr: false});
    return {default: Icon};
})

const ReactIcon = ({icon, className}) => {
    const Icon = DynamicIcon(icon, className);
    
    
    if (Icon) {
        return <Suspense fallback={<p>...Sus Main</p>}>
            {Icon}
        </Suspense>
    }
    return <RxActivityLog className={clsx(className, 'Final-Return')}/>;
}

export {ReactIcon}