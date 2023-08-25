import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as CiIcons from 'react-icons/ci';
import * as DiIcons from 'react-icons/di';
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from 'react-icons/fc';
import * as FaIcons from 'react-icons/fa6';
import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as GrIcons from 'react-icons/gr';
import * as HiIcons from 'react-icons/hi2';
import * as ImIcons from 'react-icons/im';
import * as LiaIcons from 'react-icons/lia';
import * as IoIcons from 'react-icons/io5';
import * as LuIcons from 'react-icons/lu';
import * as MdIcons from 'react-icons/md';
import * as PiIcons from 'react-icons/pi';
import * as RxIcons from 'react-icons/rx';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as SlIcons from 'react-icons/sl';
import * as TbIcons from 'react-icons/tb';
import * as TfiIcons from 'react-icons/tfi';
import * as TiIcons from 'react-icons/ti';
import * as VscIcons from 'react-icons/vsc';
import * as WiIcons from 'react-icons/wi';
import * as CgIcons from 'react-icons/cg';


interface IProps {
    icon: string;
    className?: string;
}

const ReactIcon = ({icon, className}: IProps) => {
    if (!icon) {
        return null;
    }
    const match = /[A-Z0-9]/.exec(icon[0].toLowerCase() + icon.slice(1));

    const libStr = icon.substring(0, match.index);
    const libs = {
        'Ai': AiIcons,
        'Bs': BsIcons,
        'Bi': BiIcons,
        'Ci': CiIcons,
        'Di': DiIcons,
        'Fi': FiIcons,
        'Fc': FcIcons,
        'Fa': FaIcons,
        'Gi': GiIcons,
        'Go': GoIcons,
        'Gr': GrIcons,
        'Hi': HiIcons,
        'Im': ImIcons,
        'Lia': LiaIcons,
        'Io': IoIcons,
        'Lu': LuIcons,
        'Md': MdIcons,
        'Pi': PiIcons,
        'Rx': RxIcons,
        'Ri': RiIcons,
        'Si': SiIcons,
        'Sl': SlIcons,
        'Tb': TbIcons,
        'Tfi': TfiIcons,
        'Ti': TiIcons,
        'Vsc': VscIcons,
        'Wi': WiIcons,
        'Cg': CgIcons,
    }
    const lib = libs[libStr];
    if (lib) {
        const Icon = lib[icon];
        if (Icon) {
            return <Icon className={className}/>
        }
    } else {
        console.warn(`Icon ${icon} not found`);
    }
    return null;


}

export {ReactIcon}