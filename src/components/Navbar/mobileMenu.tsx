'use client';
import clsx from "clsx";
import {useSwipeable} from "react-swipeable";
import {XMark} from "~/assets/SVGs";
import {useNavbarContext} from "./context";
import MobileMenuItem from "./mobileMenuItem";

const MobileMenuComponent = () => {
    const {siteConfig, navbar, closeMobileMenu, isMobileMenuOpen} = useNavbarContext();
    const {navLinks} = navbar;

    const swipeConfig = useSwipeable({
        onSwipedRight: (e) => {
            console.log(e)
            closeMobileMenu()
        },
        onSwipeStart: (e) =>{
            console.log(e)
        },
        onSwiping: (e) =>{
            console.log(e)
        },
    })
    return (
        <div
            className={
                clsx('fixed top-0 right-0 z-50 ' +
                    'h-full w-[90%] ' +
                    'bg-site-green/95 ' +
                    'transition-all',
                    {
                        ['right-0']: isMobileMenuOpen,
                        ['right-[-100%]']: !isMobileMenuOpen,
                    })
            }
            {...swipeConfig}

        >
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
    )
}

export default MobileMenuComponent;