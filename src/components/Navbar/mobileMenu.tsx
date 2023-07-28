'use client';
import clsx from "clsx";
import MobileMenuItem from "./mobileMenuItem";
import {IBlogNavbarLink} from "~/models";
import {XMark} from "~/assets/SVGs";
import {useNavbarContext} from "./context";


const MobileMenuComponent = () => {
    const {siteConfig, navbar, closeMobileMenu, isMobileMenuOpen} = useNavbarContext();
    const {navLinks} = navbar;
    return <div className={clsx('fixed top-0 right-0 h-full bg-site-green/95 transition-all z-50', {
        ['w-[90%] overflow-visible']: isMobileMenuOpen,
        ['w-0 overflow-hidden']: !isMobileMenuOpen,
    })}>
        <div className='bg-site-green p-6 text-right flex justify-end align-center'>
            <button
                className='text-white'
                onClick={closeMobileMenu}
                role='button'
                aria-label={siteConfig.closeMenuText}>
                <XMark/>
            </button>
        </div>
        <ul className={'flex flex-col list-none p-0 transition-all absolute w-full'}>
            {
                navLinks.map(link => <MobileMenuItem key={link.url} link={link}/>)
            }
        </ul>
    </div>
}

export default MobileMenuComponent;