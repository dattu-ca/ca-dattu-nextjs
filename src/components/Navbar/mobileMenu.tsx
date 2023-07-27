'use client';
import clsx from "clsx";
import MobileMenuItem from "./mobileMenuItem";
import {IBlogNavbarLink} from "~/models";
import {XMark} from "~/assets/SVGs";

interface IProps {
    navLinks: IBlogNavbarLink[],
    open: boolean,
    setClose: () => void,
}

const MobileMenuComponent = ({navLinks, open, setClose}: IProps) => {
    return <div className={clsx('fixed top-0 right-0 w-[90%] h-full bg-site-green/95 transition-all', {
        ['w-[90%] overflow-visible']: open,
        ['w-0 overflow-hidden']: !open,
    })}>
        <div className='bg-site-green p-6 text-right flex justify-end align-center'>
            <button className='text-white' onClick={setClose}><XMark/></button>
        </div>
        <ul className={'flex flex-col list-none p-0 transition-all absolute w-full'}>
            {
                navLinks.map(link => <MobileMenuItem link={link} key={link.url} setClose={setClose}/>)
            }
        </ul>
    </div>
}

export default MobileMenuComponent;