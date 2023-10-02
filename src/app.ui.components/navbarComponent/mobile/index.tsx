import React, {useEffect, useRef} from 'react';
import clsx from "clsx";
import {GiHamburgerMenu} from "react-icons/gi";
import {FaTimes} from "react-icons/fa";
import {useNavbarContext} from "../context";
import {Close} from "./close";
import {Menu} from "./menu";

const MenuMobile = () => {
    const ref = useRef<HTMLDialogElement | null>(null)
    const {
        ctxData: {
            openMenuText,
            closeMenuText,
            isMobileMenuOpen,
        },
        ctxFunctions: {
            toggleMobileMenu,
            closeMobileMenu,
        }
    } = useNavbarContext();

    useEffect(() => {
        const dialogRef = ref.current;
        // @ts-ignore
        dialogRef?.addEventListener('close', closeMobileMenu)
        return () => {
            // @ts-ignore
            dialogRef?.removeEventListener('close', closeMobileMenu)
        }
    }, [closeMobileMenu])

    useEffect(() => {
        if (ref.current) {
            if (isMobileMenuOpen) {
                ref.current?.showModal()
            } else {
                ref.current?.close()
            }
        }

    }, [isMobileMenuOpen])

    return <div>
        <div role="menubar">
            <button
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? closeMenuText : openMenuText}
                className={clsx(
                    'daisyui-btn daisyui-btn-outline',
                    'flex-nowrap'
                )}
            >
                <span>Menu</span>
                <div className={clsx(
                    'daisyui-swap daisyui-swap-rotate',
                    {
                        ['daisyui-swap-active']: isMobileMenuOpen
                    }
                )}>
                    <GiHamburgerMenu className={clsx(
                        'daisyui-swap-off'
                    )}/>
                    <FaTimes className={clsx(
                        'daisyui-swap-on'
                    )}/>
                </div>
            </button>

            <dialog ref={ref} className="daisyui-modal">
                <div
                    className={clsx(
                        'absolute top-[30px] max-h-[calc(100vh - 60px)]',
                        'daisyui-modal-box',
                        'group rounded-xl shadow-lg shadow-zinc-800/5 backdrop-blur transition',
                        'bg-white/90 ring-zinc-900/5',
                        'dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20',
                        {
                            ['ring-1']: isMobileMenuOpen,
                            ['h-0 overflow-hidden ring-0']: !isMobileMenuOpen
                        }
                    )}
                    style={{'--tw-bg-opacity': 0.95} as React.CSSProperties}>
                    <Close/>
                    <Menu/>
                </div>
                <form method="dialog" className="daisyui-modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </div>
    </div>
}

export {MenuMobile};