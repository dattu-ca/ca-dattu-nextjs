'use client';
import clsx from "clsx";
import MobileMenuItem from "./mobileMenuItem";
import {IBlogNavbarLink} from "~/models";
import {XMark} from "~/assets/SVGs";

interface IProps {
    navLinks: IBlogNavbarLink[],
    open: boolean,
    setClose: () => void,
    closeMenuText?: string | undefined;
}

const MobileMenuComponent = ({navLinks, open, setClose, closeMenuText}: IProps = {
    navLinks: [],
    open: false,
    setClose: () => ({}),
    closeMenuText: 'Close Menu'
}) => {
    return <div className={clsx('fixed top-0 right-0 h-full bg-site-green/95 transition-all z-50', {
        ['w-[90%] overflow-visible']: open,
        ['w-0 overflow-hidden']: !open,
    })}>
        <div className='bg-site-green p-6 text-right flex justify-end align-center'>
            <button
                className='text-white'
                onClick={setClose}
                role='button'
                aria-label={closeMenuText}>
                <XMark/>
            </button>
        </div>
        <ul className={'flex flex-col list-none p-0 transition-all absolute w-full'}>
            {
                navLinks.map(link => <MobileMenuItem link={link} key={link.url} setClose={setClose}/>)
            }
        </ul>
    </div>
}

export default MobileMenuComponent;